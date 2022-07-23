class orders {   
    async getOrdersDetail(orders_id) {
      return await SQLManager.findOne("orders", { orders_id: orders_id });
    }
  
    async getOrdersList(whereClause) {
      return await SQLManager.find("orders", whereClause);
    }
  
    async updateOrders(whereClause, updateData) {
      return await SQLManager.update("orders", whereClause, updateData);
    }
  
    async createOrders(ordersObj) {
      return await SQLManager.insert("orders", ordersObj);
    }
  
    async executeRawQuery(query) {
      return (
        await SQLManager.doExecuteRawQuery(
          query
        )
      )[0];
    }
  }
  
  module.exports = orders;