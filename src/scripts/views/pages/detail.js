import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import RestaurantDetail from '../templates/restaurant-detail';
import LikeButton from '../templates/like-button';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <h2>Detail Restaurant</h2>
    <section id="detail">
    </section>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(url.id);
    const restaurantDetail = document.createElement('restaurant-detail');
    const detail = document.querySelector('#detail');
    const likeButton = document.createElement('like-button');
    restaurantDetail.restaurant = { ...restaurant };
    detail.appendChild(restaurantDetail);
    detail.appendChild(likeButton);

    LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Detail;
