
class PlaceOrderInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      "productId": {
        "name": "product_id",
        "type": "number",
        "description": "product id ",
        "required": false,
        "default": 0
      },
      "productQuantity":{
        "name": "quantity",
        "type": "number",
        "description": "product stock count ",
        "required": false,
        "default": "0"
      },
      "buyFromCart":{
        "name": "buy_from_cart",
        "type": "number",
        "description": "check out from user cart ",
        "required": false,
        "default": "0"
      },
      
      
    };

    return { ...param };
  }
}

module.exports = PlaceOrderInitalize;