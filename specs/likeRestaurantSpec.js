import LikeButton from '../src/scripts/views/templates/like-button';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';

describe('like a restaurant', () => {
  let likeButton;

  const initLikeButton = () => {
    likeButton = document.createElement('like-button');
    document.body.appendChild(likeButton);
  };

  beforeEach(() => {
    initLikeButton();
  });

  it('should show like button if not liked before', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });
  it('should not show unlike button if not liked before', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });
  it('should be able to like and saved to favorite', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').click();
    const restaurant = await FavoriteRestaurant.get(1);

    expect(restaurant).toEqual({ id: 1 });
    await FavoriteRestaurant.delete(1);
  });

  it('should not create duplicate favorite item', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    await FavoriteRestaurant.put({ id: 1 });

    document.querySelector('#likeButton').click();

    const restaurants = await FavoriteRestaurant.getAll();
    console.log(restaurants);
    expect(restaurants).toEqual([{ id: 1 }]);
    await FavoriteRestaurant.delete(1);
  });

  xit('should not save when no id', async () => {
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
      },
    });


    document.querySelector('#likeButton').click();
    const restaurants = await FavoriteRestaurant.getAll();
    expect(restaurants).toEqual([]);
  });
});
