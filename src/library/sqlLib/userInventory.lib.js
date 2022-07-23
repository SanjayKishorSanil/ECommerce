class userInventory {   
    async getUserInventoryDetail(userInventory_id) {
      return await SQLManager.findOne("user_inventory", { userInventory_id: userInventory_id });
    }
  
    async getUserInventoryList(whereClause) {
      return await SQLManager.find("user_inventory", whereClause);
    }
  
    async updateUserInventory(whereClause, updateData) {
      return await SQLManager.update("user_inventory", whereClause, updateData);
    }
  
    async createUserInventory(userInventoryObj) {
      return await SQLManager.insert("user_inventory", userInventoryObj);
    }
  
    async executeRawQuery(query) {
      return (
        await SQLManager.doExecuteRawQuery(
          query
        )
      )[0];
    }
  }
  
  module.exports = userInventory;