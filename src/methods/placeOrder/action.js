const orderCheckoutHelperLib = require("../../library/helperLib/orderCheckoutHelper");
class PlaceOrderAction extends baseAction {

  async executeMethod() {
    let { userObj,productId,productQuantity,buyFromCart } = this;
    
    let orderStatus = false; 
    if(productId && productQuantity){
       orderStatus = await orderCheckoutHelperLib.processDirectPurchase(userObj.user_id,productId,productQuantity);
    }else if(buyFromCart){
       orderStatus = await orderCheckoutHelperLib.processPurchaseFromCart(userObj.user_id);
    }
    if(orderStatus){
      this.setResponse('SUCCESS');
      return {};
    }else{
      this.setResponse('CHECKOUT_FAILED');
      return{};
    }
  };

}
module.exports = PlaceOrderAction;