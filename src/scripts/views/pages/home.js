import '../templates/restaurant-highlight';
import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';

const Home = {

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
      const restaurantHighlight = document.createElement('restaurant-highlight');
      restaurantHighlight.restaurant = {
        ...restaurant,
        imageUrl: CONFIG.BASE_IMAGE_URL + restaurant.pictureId,
      };
      restaurantList.appendChild(restaurantHighlight);
    });
  },
};

export default Home;
