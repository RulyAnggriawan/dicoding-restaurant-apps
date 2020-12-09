class RestaurantItem extends HTMLElement{
    set restaurant(restaurant){
        const target = {};
        ({name: this.name, description : this.description, city: this.city, rating:this.rating, pictureId : this.img} = restaurant);
        this.render();
    }
    
    render(){
        this.innerHTML = `
        <style>
            .restaurant{
                position: relative;
                padding-bottom: 50px;
            }
            
            .cover{
                height: 50%;
            }
            
            .cover img{
                width: 100%;
                height: 350px;
                object-fit: cover;
            }
            
            .content{
                margin: 15px 15px 15px 15px;
            }
            
            .city{
                position: absolute;
                top : 20px;
                left: 20px;
                font-weight: bold;
                font-size: large;
                color: black;
                padding: 10px;
                background-color: rgba(255, 255, 255, 0.5);
                border-radius: 5px;
                min-width: 100px;
                text-align: center;
            }
            
            .name{
                font-weight: bold;
                font-size: 1.5em;
                margin: 5px 0;
            }
            
            .description{
                text-align: justify;
            }
        </style>
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