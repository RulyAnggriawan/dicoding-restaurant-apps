import FavoriteRestaurant from '../../data/favorite-restaurant';
import '../templates/restaurant-highlight';
import CONFIG from '../../globals/config';

const Favorite = {
  render() {
    return `
    <h2>Favorite</h2>
    <section id="favorite">
    </section>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAll();
    const restaurantList = document.querySelector('#favorite');
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

export default Favorite;
