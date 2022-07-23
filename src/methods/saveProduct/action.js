const constant = require("../../global/constants");
class SaveProductAction extends baseAction {

  async executeMethod() {
    let { userObj, productId,productQuantity } = this;
    const [productLib, userInventoryLib] = AutoLoad.loadLibray("sqlLib", ["product", "userInventory"]);
    // Check for product id in product Table 
    let productDetails = await productLib.getProductDetail(productId);

    if(productDetails.product_quantity < productQuantity){
      this.setResponse("INSUFFICENT_QUANTITY");
      return{
        product_quantity : productDetails.product_quantity
      }
    }
    // Add product to user Inventory
    //Checking if product already added and removed from cart
    let userInventoryProductDetail = await userInventoryLib.executeRawQuery(`SELECT * FROM user_inventory WHERE user_id = ${userObj.user_id} AND product_id = ${productId} `);
  
    if (userInventoryProductDetail.length) {
      await userInventoryLib.executeRawQuery(`UPDATE user_inventory set product_quantity = ${productQuantity},status = ${constant.ACTIVE} WHERE user_id = ${userObj.user_id} AND product_id = ${productId} `);
    } else {
      let userInventoryData = {
        user_id: userObj.user_id,
        product_id: productId,
        product_quantity:productQuantity,
        status: constant.ACTIVE
      }
      await userInventoryLib.createUserInventory(userInventoryData)
    }
    this.setResponse('SUCCESS');
    return {};
  };

}
module.exports = SaveProductAction;