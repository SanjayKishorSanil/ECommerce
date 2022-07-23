const constant = require("../../global/constants");
const orderCheckoutHelperLib = require("../../library/helperLib/orderCheckoutHelper");
class GetOrderHistoryAction extends baseAction {

  async executeMethod() {
    let { userObj,page,limit } = this;
    const [orderLib] = AutoLoad.loadLibray("sqlLib", ["orders"]);
    let orderHistory = [];
    if(page > constant.ZERO & limit > constant.ZERO){
      let query = orderCheckoutHelperLib.getOrderHistory(userObj.user_id,page,limit);
      orderHistory = await orderLib.executeRawQuery(query);
    }else{
     orderHistory = await orderLib.executeRawQuery(`SELECT * FROM orders WHERE user_id = ${userObj.user_id}`);
    }
    this.setResponse('SUCCESS');
    return {
      order_history : orderHistory
    };
  };

}
module.exports = GetOrderHistoryAction;