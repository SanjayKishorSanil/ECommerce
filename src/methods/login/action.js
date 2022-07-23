const bcrypt = require("bcrypt");
class LoginAction extends baseAction {

  async executeMethod() {
    let { emailId, password } = this;
    const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);
    const jwtHelperLib = require("../../library/helperLib/jwtHelper")

    let userDetails = await userLib.getUserDetail({
      email_id: emailId
    })
    
    if (!userDetails.length) {
      // No user found
      this.setResponse('USER_NOT_FOUND');
      return {};
    }
    let isPasswordMatch = await bcrypt.compare(password, userDetails[0].password);
    if (isPasswordMatch) {
      let accessToken = await jwtHelperLib.createJwtToken({
        user_id: userDetails[0].user_id,
      });
      await userLib.updateUser({ user_id: userDetails[0].user_id }, { access_token: accessToken });// tremove zero
      this.setResponse('SUCCESS');
      return {
        access_token: accessToken
      };
    } else {
      this.setResponse('LOGIN_FAILED');
      return {};
    }


  };

}
module.exports = LoginAction;