
class GetOrderHistoryInitalize extends baseInitialize {

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
        required: false,
        default: "",
      },
      limit: {
        name: "limit",
        type: "number",
        description: "limit",
        required: false,
        default: "",
      },
    };

    return { ...param };
  }
}

module.exports = GetOrderHistoryInitalize;