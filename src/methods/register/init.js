
class RegisterInitalize extends baseInitialize {

  constructor() {
    super();
    this.initializer =  {};
    this.initializer.isSecured = false; // values: true/false
    this.initializer.requestMethod = ['POST']; // requestMethod: ['GET', 'POST', 'PUT', 'DELETE']
  }

  getParameter() {
    const param = {
      emailId: {
        name: "email_id",
        type: "string",
        description: "email id of user",
        required: true,
        default: "",
      },
      password: {
        name: "password",
        type: "string",
        description: "password",
        required: true,
        default: "",
      },
      
    };

    return { ...param };
  }
}

module.exports = RegisterInitalize;