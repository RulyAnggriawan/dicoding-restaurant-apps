class RestaurantHighlight extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    ({
      id: this.id,
      name: this.name,
      description: this.description,
      city: this.city,
      rating: this.rating,
      imageUrl: this.imageUrl,
    } = restaurant);
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
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

            .name a{
                margin: 0;
                padding: 0;
                
            }

            .restaurant .description{
                text-align: justify;
                text-overflow: ellipsis;
                overflow: hidden;
                display:-webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        </style>
        <article class="restaurant">
            <div class="cover">
                <p class="city">${this.city}</p>
                <img src="${this.imageUrl}" alt="restaurant ${this.name}" >
            </div>
            <div class="content">
                <p class="rating">Rating : ${this.rating}</p>
                <p class="name"><a href="/#/detail/${this.id}" title="go to detail">${this.name}</a></p>
                <p class="description">${this.description}</p>
            </div>
            <hr>
        </article>
        `;
  }
}

customElements.define('restaurant-highlight', RestaurantHighlight);
