import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import '../templates/restaurant-detail';
import '../templates/like-button';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import API_ENDPOINT from '../../globals/api-endpoint';
import CONFIG from '../../globals/config';
import NotificationHelper from '../../utils/notification-helper';

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

    const submitReview = document.querySelector('#submit-review');
    submitReview.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(submitReview);
      let comment;
      let status = 'fail';
      try {
        const response = await fetch(API_ENDPOINT.SUBMIT_REVIEW, {
          method: 'POST',
          body: JSON.stringify({
            name: formData.get('name'),
            review: formData.get('review'),
            id: restaurant.id,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'X-Auth-Token': CONFIG.KEY,
          },
        });
        const responseJSON = await response.json();
        comment = responseJSON.error === false ? 'Please refresh page to see your comment' : 'Please try again';
        status = responseJSON.message;
      } catch (error) {
        comment = 'Please try again';
      } finally {
        NotificationHelper.sendNotification({
          title: `Submit Review is ${status}`,
          options: {
            body: comment,
            requireInteraction: true,
          },
        });
      }
    });
  },
};

export default Detail;
