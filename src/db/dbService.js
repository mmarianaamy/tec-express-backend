class DBService {
  async getAllCustomers() {
    throw new Error('Hi, this is a change');
  }

  async getCustomerById(id) {
    throw new Error('Method not implemented');
  }

  async createCustomer(name, email) {
    throw new Error('Method not implemented');
  }

  async updateCustomer(id, name, email) {
    throw new Error('Method not implemented');
  }

  async deleteCustomer(id) {
    throw new Error('Method not implemented');
  }
}

module.exports = DBService; 