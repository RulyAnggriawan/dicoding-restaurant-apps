import '../templates/restaurant-item';
import RestaurantSource from '../../data/restaurant-source';

const RestaurantList = {

  async render() {
    return `
    <h2>Explore Restaurants</h2>
    <section id="restaurant-list">
    </section>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantSource.list();
    const restaurantList = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
      restaurantList.appendChild(restaurantItem);
    });
  },
};

export default RestaurantList;
