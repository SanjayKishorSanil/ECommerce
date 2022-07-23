const jwt = require("jsonwebtoken");
 let jwtHelper = {};
 jwtHelper.createJwtToken=async(userId, JWT_SECRET=JSON.parse(process.env.AUTH).JWT_SECRET, expiresIn)=> {
    return jwt.sign(
      userId,
      JWT_SECRET,
      expiresIn ? { expiresIn: expiresIn } : {}
    );
  },

  jwtHelper.decodeJwtToken = async(token, JWT_SECRET)=> {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      console.log("<-----------------------------DECODE JWT ERROR----------------------------->");
      console.log("error", error.message);
      return;
    }
  }


module.exports = jwtHelper;
