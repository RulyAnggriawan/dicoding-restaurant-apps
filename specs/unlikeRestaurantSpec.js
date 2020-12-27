import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

describe('unlike a restaurant', () => {
  const likeButton = document.createElement('like-button');

  const initLikeButton = () => {
    document.body.appendChild(likeButton);
  };

  beforeEach(async () => {
    initLikeButton();
    await FavoriteRestaurant.put({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.delete(1);
  });
  xit('should show unlike button if already liked before', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    console.log(document.querySelector('button'));

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });
});
