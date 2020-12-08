class RestaurantItem extends HTMLElement{
    set restaurant(restaurant){
        const target = {};
        ({name: this.name, description : this.description, city: this.city, rating:this.rating, pictureId : this.img} = restaurant);
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <article class="restaurant">
            <div class="cover">
                <p class="city">${this.city}</p>
                <img src="${this.img}" alt="image of restaurant ${this.name}" >
            </div>
            <div class="content">
                <p class="rating">Rating : ${this.rating}</p>
                <p class="name">${this.name}</p>
                <p class="description">${this.description}</p>
            </div>
        </article>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);