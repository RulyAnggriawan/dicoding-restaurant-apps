import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async list() {
    const response = await fetch(API_ENDPOINT.LIST);
    if (response.ok) {
      const restaurants = await response.json();
      return restaurants.restaurants;
    }
    console.log(`HTTP error : ${response.status}`);
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (response.ok) {
      const restaurant = await response.json();
      return restaurant.restaurant;
    }
    console.log(`HTTP error : ${response.status}`);
  }
}

export default RestaurantSource;
