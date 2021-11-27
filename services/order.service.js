const { models } = require('../libs/sequelize');

class OrderService {
  constructor(){
  }

  async create(data){
    const newOrder = await models.Order.create(data);
    return newOrder;
  }
}

module.exports = OrderService;
