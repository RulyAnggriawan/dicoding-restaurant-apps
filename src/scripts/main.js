import './restaurant-item';

const jsonData = require('./DATA.json');

const main = () => {
  const getData = async () => Promise.resolve(jsonData);

  const restaurantList = document.querySelector('#restaurant-list');
  const hamburgerButton = document.querySelector('#hamburger');
  const drawer = document.querySelector('#drawer');
  const bodyElement = document.querySelector('body');

  hamburgerButton.addEventListener('click', (event) => {
    drawer.classList.toggle('hidden');
    event.stopPropagation();
  });

  bodyElement.addEventListener('click', (event) => {
    drawer.classList.add('hidden');
    event.stopPropagation();
  });

  getData().then((data) => {
    data.restaurants.forEach((item) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = item;
      restaurantList.appendChild(restaurantItem);
    });
  });
};

export default main;
