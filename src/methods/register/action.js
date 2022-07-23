
class RegisterAction extends baseAction {

  async executeMethod() {
    let { emailId,password } = this;
    try {

      //Auto Loads
      const [userLib] = AutoLoad.loadLibray("sqlLib", ["user"]);

      //variable section
      let user,
        userData

      /*<-------------------- CHECK IF USER EXIST -------------------->*/
      
        user = await userLib.getUserDetail({
          email_id: emailId
        });
       
        //Check if user already exists and he verified email
        if (user) {
          // already exists
          this.setResponse('ALREADY_REGISTERED');
          return {};
        }else{
      /*<-------------------- CREATE USER DATA -------------------->*/
      userData = {
        user_name:
          emailId.replace(/@.*/, "") + "_" + Math.floor(Math.random() * 1000), //get name from email id
        email_id: emailId,
        password: await require("bcrypt").hash(password, 10),
        address : "",
        phone_number : 0,
        access_token : "",
      };   

      await userLib.createUser(userData);

      this.setResponse('SUCCESS');
      return {};
        }


    } catch (error) {
     console.log(error);
    }
  };

}
module.exports = RegisterAction;