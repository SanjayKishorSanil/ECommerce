
class ListProductsInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = true; // values: true/false
    this.initializer.requestMethod = ['GET']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      page: {
        name: "page",
        type: "number",
        description: "page",
        required: true,
        default: "",
      },
      limit: {
        name: "limit",
        type: "number",
        description: "limit",
        required: true,
        default: "",
      },
    };

    return { ...param };
  }
}

module.exports = ListProductsInitalize;