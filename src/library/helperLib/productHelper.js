let productHelper = {};

productHelper.getProductListQuery = (page, limit) => {
    let offsetValue = (page - 1) * limit;
    let sqlQuery = `SELECT * FROM product WHERE product_status = 1 LIMIT ${limit} OFFSET ${offsetValue}`;
    return sqlQuery;
}

productHelper.getProductDetailQuery = (productId) => {
    return (
        ` SELECT product.product_id,product.product_name,product.product_price,product.product_image_url,product_details.product_description ,
                 seller.seller_name,seller.seller_phone,seller.seller_status 
          FROM product_details 
          INNER JOIN product ON product.product_id = product_details.product_id
          INNER JOIN seller ON product_details.seller_id = seller.seller_id 
          WHERE product_details.product_id = ${productId}`
    )
} 

module.exports = productHelper;