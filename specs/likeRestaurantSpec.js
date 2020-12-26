import LikeButton from '../src/scripts/views/templates/like-button';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('like a restaurant', () => {
  it('should show like button if not liked before', async () => {
    const likeButton = document.createElement('like-button');
    document.body.appendChild(likeButton);
    await LikeButtonInitiator.init({
      likeButton,
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
    .toBeTruthy();
    
  });
});
