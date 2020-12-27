import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

describe('unlike a restaurant', () => {
  let likeButton;

  const initLikeButton = () => {
    likeButton = document.createElement('like-button');
    document.body.innerHTML = '';
    document.body.appendChild(likeButton);
  };

  beforeEach(async () => {
    initLikeButton();
    await FavoriteRestaurant.put({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurant.delete(1);
  });
  it('should show unlike button if already liked before', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });
  it('should not show like button if already liked before', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurant"'))
      .toBeFalsy();
  });

  it('should remove from record when click', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').click();
    expect(await FavoriteRestaurant.getAll()).toEqual([]);
  });

  it('should not throw error if restaurant not availabe when deleted', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurant.delete(1);

    document.querySelector('#likeButton').click();
    expect(await FavoriteRestaurant.getAll()).toEqual([]);
  });
});
