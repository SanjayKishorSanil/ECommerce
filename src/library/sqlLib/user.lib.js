class user {    
    async getUserDetail(whereClause) {
      return (await SQLManager.find("user", whereClause));
    }
  
    async updateUser(whereClause, updateData) {
      return await SQLManager.update("user", whereClause, updateData);
    }
  
    async createUser(userObj) {
      return await SQLManager.insert("user", userObj);
    }
  
    async executeRawQuery(query) {
      return (
        await SQLManager.doExecuteRawQuery(
          query
        )
      )[0];
    }
  }
  
  module.exports = user;