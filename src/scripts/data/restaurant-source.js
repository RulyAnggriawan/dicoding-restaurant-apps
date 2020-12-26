/* eslint-disable consistent-return */
import API_ENDPOINT from '../globals/api-endpoint';
import NotificationHelper from '../utils/notification-helper';

class RestaurantSource {
  static async list() {
    try {
      const response = await fetch(API_ENDPOINT.LIST);
      if (response.ok) {
        const restaurants = await response.json();
        return restaurants.restaurants;
      }
    } catch (error) {
      NotificationHelper.sendNotification({
        options: {
          title: 'error',
          body: 'please retry',
          requireInteraction: true,
        },
      });
    }
  }

  static async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (response.ok) {
        const restaurant = await response.json();
        return restaurant.restaurant;
      }
    } catch (error) {
      NotificationHelper.sendNotification({
        options: {
          title: 'error',
          body: 'please retry',
          requireInteraction: true,
        },
      });
    }
  }
}

export default RestaurantSource;
