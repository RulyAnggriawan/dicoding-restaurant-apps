import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import RestaurantDetail from '../templates/restaurant-detail';

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
    restaurantDetail.restaurant = { ...restaurant };
    detail.appendChild(restaurantDetail);
  },
};

export default Detail;
