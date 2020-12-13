const jsonData = require('../DATA.json');

class RestaurantSource {
  static async list() {
    const response = await jsonData;
    return response.restaurants;
  }
}

export default RestaurantSource;
