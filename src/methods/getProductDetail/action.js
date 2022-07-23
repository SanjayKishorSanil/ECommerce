const productHelperLib = require("../../library/helperLib/productHelper");
class GetProductDetailAction extends baseAction {

  async executeMethod() {
    let { productId } = this;
    const [productLib] = AutoLoad.loadLibray("sqlLib", ["product"]);
    let query = productHelperLib.getProductDetailQuery(productId)
    let productDetail = await productLib.executeRawQuery(query)
    this.setResponse('SUCCESS');
    return {
      product_detail : productDetail
    };
  };

}
module.exports = GetProductDetailAction;