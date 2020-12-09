import RestaurantItem from './restaurant-item'

const main = () => {

    const getData = async () => {
        let jsonData = require("./DATA.json");
        return Promise.resolve(jsonData);
    }

    let restaurantList = document.querySelector("#restaurant-list");
    let hamburgerButton = document.querySelector("#hamburger");
    let drawer = document.querySelector("#drawer");
    let bodyElement = document.querySelector("body")
    
    hamburgerButton.addEventListener("click", event => {
        drawer.classList.toggle("hidden");
        event.stopPropagation();
    })

    bodyElement.addEventListener("click", event => {
        drawer.classList.add("hidden")
        event.stopPropagation();
    })

    getData().then(data => {
        data.restaurants.forEach(item => {
            let restaurantItem = document.createElement("restaurant-item");
            restaurantItem.restaurant = item;
            restaurantList.appendChild(restaurantItem);
        });
    })


}

export default main;