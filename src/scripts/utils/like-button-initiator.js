import FavoriteRestaurant from '../data/favorite-restaurant';

const LikeButtonInitiator = {
  async init({ likeButton, restaurant }) {
    this._likeButton = likeButton;
    this._restaurant = restaurant;
    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._likeButton.renderLiked();
      this._likeButton.setClickEvent(async () => {
        await FavoriteRestaurant.delete(this._restaurant.id);
        this._renderButton();
      });
    } else {
      this._likeButton.renderLike();
      this._likeButton.setClickEvent(async () => {
        await FavoriteRestaurant.put(this._restaurant);
        this._renderButton();
      });
    }
  },
  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurant.get(id);
    return !!restaurant;
  },
};
export default LikeButtonInitiator;
