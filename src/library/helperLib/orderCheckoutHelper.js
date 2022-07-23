const constant = require("../../global/constants");

const [productLib, orderLib, userInventoryLib] = AutoLoad.loadLibray("sqlLib", ["product", "orders", "userInventory"]);

let orderCheckoutHelper = {};

orderCheckoutHelper.processDirectPurchase = async (userId, productId, productQuantity) => {
    let productDetails = await productLib.getProductDetail(productId);
    if (productDetails.product_quantity < productQuantity) {
        return false;
    }
    let productQtyUpdate = await productLib.executeRawQuery(`UPDATE product SET product_quantity = ${productDetails.product_quantity - productQuantity} WHERE product_id = ${productId} `);
    if (productQtyUpdate) {
        // Process payment status 
        // If payment success add order to user order list
        let orderData = formatOrder(userId, productQuantity, productDetails)
        await orderLib.createOrders(orderData);
        return true;

    }

}

orderCheckoutHelper.processPurchaseFromCart = async (userId) => {
    let userCartProduct = await userInventoryLib.executeRawQuery(`SELECT * FROM user_inventory WHERE user_id = ${userId} AND status = ${constant.ACTIVE}`);
    let totalPrice = 0;
    let productIdList = "";
    let userCartProductObject = {};
    userCartProduct.forEach((product) => {
        userCartProductObject[product.product_id] = product.product_quantity;
        productIdList += product.product_id.toString() + ",";
    });
    productIdList = productIdList.slice(0, -1);


    let productDetails = await productLib.executeRawQuery(`SELECT * FROM product WHERE product_id IN (${productIdList})`);
    for (let i = 0; i < productDetails.length; i++) {
        let productData = productDetails[i];
        if (productData.product_quantity < userCartProductObject[productData.product_id]) {
            return false;
        } else {
            totalPrice += (productData.product_price * userCartProductObject[productData.product_id]);
            let productQtyUpdate = await productLib.executeRawQuery(`UPDATE product SET product_quantity = ${productData.product_quantity - userCartProductObject[productData.product_id]} WHERE product_id = ${productData.product_id} `);
            if (productQtyUpdate) {
                let orderData = formatOrder(userId, userCartProductObject[productData.product_id], productData);
                await orderLib.createOrders(orderData);
            }
        }

    }
    return true;
}

orderCheckoutHelper.getOrderHistory = (userId, page, limit) => {
    let offsetValue = (page - 1) * limit;
    let sqlQuery = `SELECT * FROM orders WHERE user_id = ${userId} LIMIT ${limit} OFFSET ${offsetValue}`;
    return sqlQuery;
}

function formatOrder(userId, productQuantity, productDetails) {
    return ({
        user_id: userId,
        product_id: productDetails.product_id,
        order_quantity: productQuantity,
        order_amount: productDetails.product_price * productQuantity,
        order_placed_date: Math.floor(new Date().getTime() / 1000),
        order_delivery_date: new Date().setDate(new Date().getDate() + 7),
        payment_mode: constant.PAYEMENT_MODE.COD,
        order_status: constant.ORDER.PLACED
    })
}

module.exports = orderCheckoutHelper;