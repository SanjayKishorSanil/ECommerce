const RESPONSE = {
  INVALID_USER: {
    responseCode: 1001, responseMessage: {
      "en": "Invalid user data"
    }
  },
  ALREADY_REGISTERED:{
    responseCode: 1002, responseMessage: {
      "en": "User already regsitered!"
    }
  },
  LOGIN_FAILED:{
    responseCode: 1003, responseMessage: {
      "en": "Login failed!"
    }
  },
  USER_NOT_FOUND:{
    responseCode: 1004, responseMessage: {
      "en": "User not found. Please Register!"
    }
  },
  INSUFFICENT_QUANTITY:{
    responseCode: 1005, responseMessage: {
      "en": "Insufficent Quantity"
    }
  },
  CHECKOUT_FAILED:{
    responseCode: 1006, responseMessage: {
      "en": "Order purchased failed !!"
    }
  }
  
};

module.exports.RESPONSE = RESPONSE;
