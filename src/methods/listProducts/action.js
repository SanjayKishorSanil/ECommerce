const productHelperLib = require("../../library/helperLib/productHelper");
class ListProductsAction extends baseAction {

  async executeMethod() {
    let { userObj ,page,limit } = this;
    const [userLib,productLib,userInventoryLib] = AutoLoad.loadLibray("sqlLib", ["user","product","userInventory"]);
    let query = productHelperLib.getProductListQuery(page,limit);
    let productList = await productLib.executeRawQuery(query);
    let userInventoryData = await  userInventoryLib.executeRawQuery(`SELECT product_id from user_inventory WHERE user_id = ${userObj.user_id} AND status = 1`);
    let productIdList =userInventoryData.map((product)=>{
      return product.product_id;
    });

    productList = productList.map((productDetail)=>{
      productDetail.is_stock_out = productDetail.product_quantity == 0 ? true:false;
      if(productIdList.indexOf(productDetail.product_id) != -1 ){
        productDetail.is_save = true;
      }else{
        productDetail.is_save = false;
      }
      return productDetail;
    });

    this.setResponse('SUCCESS');
    return {
      product_list :productList
    };
  };

}
module.exports = ListProductsAction;