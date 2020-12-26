class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    ({
      id: this.id,
      name: this.name,
      description: this.description,
      city: this.city,
      rating: this.rating,
      pictureId: this.pictureId,
      categories: this.categories,
      menus: this.menus,
      address: this.address,
      customerReviews: this.customerReviews,
    } = restaurant);
    this.render();
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

        .headline{
            max-width: 768px;
            margin-right: auto;
            margin-left: auto;
        }
        
        .restaurant-detail .menu{
            border-top: 1px solid #89c9b8;
            margin-top: 10px;
            padding-top: 10px;
            max-width: 768px;
            margin-right: auto;
            margin-left: auto;
        }
        
        .restaurant-detail .menu>ul{
            list-style-type: none;
            margin-left: 20px;
        }
        
        .restaurant-detail .menu>ul>li{
            margin-top: 10px;
        }
        
        .customer-review{
            border-top: 1px solid #89c9b8;
            margin-top: 10px;
            padding-top: 10px;
            max-width: 768px;
            margin-right: auto;
            margin-left: auto;
        }
        
        .customer-review ul{
            list-style-type: none;
        }
        
        .customer-review li{
            margin: 10px 0;
            border: 1px solid #c7e2b2;
            border-radius: 5px;
            padding : 10px;
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

        button{
            width: 100%;
        }
        
        .customer-review button[type=submit]{
            margin-top: 20px;
            margin-right: auto;
            margin-left: auto;
            background-color: #e1ffc2;
            padding: 15px;
        }

        .img-and-desc{
            max-width: 768px;
            margin-right: auto;
            margin-left: auto;
        }


        @media screen and (min-width: 768px){
            .restaurant-detail{
                font-size: 1.5em;
            }
            .menu>ul{
                margin-left: 0;
                display: grid;
                grid-template-columns: 1fr 1fr
            }

            .menu>ul>li{
                padding-left: 40%;
            }
        }

        @media screen and (min-width: 1025px){
            .restaurant-detail{
                font-size: 1.7em;
            }

            .headline{
                display: grid;
                grid-template-columns: 1fr 3fr;
                margin: 30px auto;
            }

            .category>h4{
                display: none;
            }

            .rating{
                grid-column-start: 1;
                grid-column-end: 2;
            }

            .address{
                grid-column-start: 2;
                grid-column-end: 3;
                grid-row-start: 1;
            }
            
        }
    </style>
    <article class="restaurant-detail">
    <div class="content">

        <section class="headline">
            <h3 class="name">${this.name}</h3> 
            <div class="rating">
                <p>${this.rating}</p>
            </div>
            
            
            <section class="category">
                
                <h4>Categories</h4>
                <ul>
                    ${this.categories.map((category) => `<li>${category.name}</li>`).join('')}
                </ul>
            </section>
            
            
            <p class="address">${this.address}, ${this.city}</p>
        </section>

        <section class="img-and-desc">
            <img src="https://restaurant-api.dicoding.dev/images/medium/${this.pictureId}" alt="restaurant ${this.name}" >
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
                ${this.customerReviews.map((customerReview) => `
                <li>
                    <p class="name">${customerReview.name}</p>
                    <p class="date">${customerReview.date}</p>
                    <P class="review">${customerReview.review}</P>
                </li>
                `).join('')}
                
                
                <li>
                    <form id="submit-review">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name">
                        <label for="review">Review</label>
                        <textarea name="review" id="review" rows="3"></textarea>
                        <button type="submit">Submit</button>
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
