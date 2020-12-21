import LikeButton from './like-button';

class RestaurantDetail extends HTMLElement {
  constructor() {
    super();
  }

  set restaurant(restaurant) {
    ({
      id: this.id,
      name: this.name,
      description: this.description,
      city: this.city,
      rating: this.rating,
      pictureId: this.img,
      categories: this.categories,
      menus: this.menus,
      address: this.address,
      customerReviews: this.customerReviews,
    } = restaurant);
    this.render();
    console.log(this.menus.foods);
  }

  render() {
    this.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .restaurant-detail{
            border-top: 1px solid #89c9b8;
            margin: 20px;
            padding: 10px;
        }
        
        .restaurant-detail section{
            // margin: 10px;
        }
        
        h3.name{
            text-align: center;
            font-size: 2em;
        }
        
        .rating{
        }
        
        .rating p{
            border: 5px solid #c7e2b2;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 40px;
            margin: 0 auto;
            font-weight: bold;
            background-color: #e1ffc2;
        }
        
        .address{
            text-align: center;
            margin-bottom: 10px;
        }
        
        .category{
            text-align: center;
        }
        
        .category>h4{
            margin-bottom: 10px;
        }
        
        .category ul{
            list-style-type: none;
        }
        
        .category li{
            display: inline-block;
            margin-right:5px;
            padding: 0 10px;
            /* border: 1px solid black; */
            border-radius: 5px;
            background-color: #89c9b8;
        }
        
        section img{
            width: 100%;
        }
        
        section>h4{
            text-align: center;
        }
        
        .restaurant-detail .description{
            text-align: justify;
        }
        
        .restaurant-detail .menu{
            border-top: 1px solid #89c9b8;
            margin-top: 10px;
            padding-top: 10px;
        }
        
        .restaurant-detail .menu>ul{
            list-style-type: none;
        }
        
        .restaurant-detail .menu>ul>li{
            margin-top: 10px;
        }
        
        .customer-review{
            border-top: 1px solid #89c9b8;
            margin-top: 10px;
            padding-top: 10px;
        }
        
        .customer-review ul{
            list-style-type: none;
        }
        
        .customer-review li{
            margin: 10px 0;
            border: 1px solid #c7e2b2;
            border-radius: 5px;
            padding : 10px;
            /* background-color: lightblue; */
        }
        
        .customer-review .name{
            text-transform: capitalize;
            color: #89c9b8;
        }
        
        .customer-review .date{
            font-size: 0.7em;
        }
        
        .customer-review .review{
            margin-top: 5px;
        }
        
        .customer-review form *{
            display: block;
        }
        
        .customer-review textarea{
            width: 100%;
        }
        
        .customer-review input{
            width: 100%;
        }
        
        .customer-review input[type=submit]{
            margin-top: 20px;
            background-color: #e1ffc2;
            padding: 15px;
        }
    </style>
    <article class="restaurant-detail">
    <div class="content">
        <h3 class="name">${this.name}</h3> <like-button is-liked='false'></like-button>
        <section class="rating">
            <p>${this.rating}</p>
        </section>
        
        
        <section class="category">
            
            <h4>Categories</h4>
            <ul>
                ${this.categories.map((category) => `<li>${category.name}</li>`).join('')}
            </ul>
        </section>
        
        <section>
        <p class="address">${this.address}, ${this.city}</p>
        <img src="https://restaurant-api.dicoding.dev/images/medium/${this.img}" alt="restaurant ${this.name}" >
        
        
        
        <p class="description">${this.description}</p>
        
        </section>
        <section class="menu">
            <h4>Menus</h4>
            <ul>
                <li>
                    <h5>Foods</h5>
                    <ul>
                        ${this.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
                </li>
                <li>
                    <h5>Drinks</h5>
                    <ul>
                        ${this.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                    </ul>
                </li>
            </ul>
        </section>
        <section class="customer-review">
            <h4>Customer Reviews</h4>
            <ul>
                ${this.customerReviews.map(customerReview => `
                <li>
                    <p class="name">${customerReview.name}</p>
                    <p class="date">${customerReview.date}</p>
                    <P class="review">${customerReview.review}</P>
                </li>
                `).join('')}
                
                
                <li>
                    <form action="#">
                        <label for="form-review">Review</label>
                        <textarea name="form review" id="form-review" rows="3"></textarea>
                        <label for="form-name">Name</label>
                        <input type="text" id="form-name" name="form name">
                        <input type="submit">
                    </form>
                </li>
            </ul>
        </section>
    </div>
</article>
    `;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
