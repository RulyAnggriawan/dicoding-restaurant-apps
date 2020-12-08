class RestaurantItem extends HTMLElement{
    set restaurant(restaurant){
        const target = {};
        ({name: this.name, description : this.description, city: this.city, rating:this.rating, pictureId : this.img} = restaurant);
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <h3>${this.name}</h3>
        <p>${this.city}</p>
        <p>${this.rating}</p>
        <img src="${this.img}" alt="image of restaurant ${this.name}" >
        <p>${this.description}</p>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);