class product {   
    async getProductDetail(product_id) {
      return await SQLManager.findOne("product", { product_id: product_id });
    }
  
    async getProductList(whereClause) {
      return await SQLManager.find("product", whereClause);
    }
  
    async updateProduct(whereClause, updateData) {
      return await SQLManager.update("product", whereClause, updateData);
    }
  
    async createProduct(productObj) {
      return await SQLManager.insert("product", productObj);
    }
  
    async executeRawQuery(query) {
      return (
        await SQLManager.doExecuteRawQuery(
          query
        )
      )[0];
    }
  }
  
  module.exports = product;