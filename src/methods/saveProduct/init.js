
class SaveProductInitalize extends baseInitialize {

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
        "required": true,
        "default": ""
      },
      "productQuantity":{
        "name": "quantity",
        "type": "number",
        "description": "product stock count ",
        "required": true,
        "default": ""
      }
    };

    return { ...param };
  }
}

module.exports = SaveProductInitalize;