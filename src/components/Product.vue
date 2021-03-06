<template>
  <div>
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="socks" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>

        <!-- Conditional Rendering -->
        <p v-if="inStock > 10">In Stock</p>
        <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
        <p v-else>Out of Stock</p>

        <p>{{ description }}</p>

        <!-- List Rendering -->
        <ul>
          <li v-for="detail in details" v-bind:key="detail.id">
            <p>{{ detail }}</p>
          </li>
        </ul>

        <!-- Class & Style Binding, Event Handling -->
        <div class="color-container">
          <div
            v-for="(variant, index) in variants"
            v-bind:key="variant.variantId"
            class="color-box"
            v-bind:style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          ></div>
        </div>

        <!-- ToDo .. -->
        <button class="cart-button" @click="addToCart" v-bind:class="{ disabledButton: !inStock }">Add to Cart</button>
        <button class="cart-remove" @click="removeFromCart">Remove from Cart</button>

        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>

        <div class="reviews-check">
          <h2>Reviews</h2>
          <p v-if="!reviews.length">There are no reviews yet.</p>
          <ul>
            <li v-for="review in reviews" v-bind:key="review.id">
              <p>Name: {{ review.name }}</p>
              <p>{{ review.review }}</p>
              <p>Rating: {{ review.rating }}</p>
            </li>
          </ul>
        </div>

        <ProductReview @review-submitted="addReview" />

        <a v-bind:href="link" target="_blank">Click here to see more products like this</a>
      </div>
    </div>
  </div>
</template>

<script>
import ProductReview from './ProductReview';
import greenSocks from '@/assets/vmSocks-green.jpg';
import blueSocks from '@/assets/vmSocks-blue.jpg';

export default {
  name: "Product",
  components: {
    ProductReview
  },
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      description: "Faster memory speed, wireless and dual digital mic",
      link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 1,
          variantColor: "green",
          variantImage: greenSocks,
          variantQuantity: 9
        },
        {
          variantId: 2,
          variantColor: "blue",
          variantImage: blueSocks,
          variantQuantity: 0
        }
      ],
      cart: 0,
      reviews: []
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    }
  },
  // Computed Properties
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}

.product {
  display: flex;
  flex-flow: wrap;
  padding: 1rem;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.product-info {
  display: flex;
  flex-wrap: wrap;
}

.product-info p {
  flex: 0 0 100%;
  padding: 10px 0;
}

.product-info a {
  flex: 0 0 100%;
  color: #16c0b0;
  font-weight: bold;
  text-decoration: none;
  padding: 5px 0;
  margin-top: 1em;
}

.product-info ul {
  display: flex;
  flex-wrap: wrap;
}

.product-info ul li {
  flex: 0 0 100%;
  margin-left: 50px;
}

.product-info .colorType {
  flex: 0 0 100%;
  cursor: pointer;
  font-weight: bold;
}

.product-info .color-container {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 100%;
}

.product-info .cart-button {
  cursor: pointer;
  flex: 0 0 20%;
  padding: 10px;
  margin-top: 7px;
}

.product-info .cart-remove {
  cursor: pointer;
  flex: 0 0 20%;
  padding: 5px;
  margin: 7px 15px;
}

.product-info .cart {
  flex: 0 0 20%;
  margin: 7px 10px;
  padding: 0;
  text-align: center;
  height: 40px;
}

.product-info .cart p {
  margin: 0;
  padding: 8px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin: 5px 5px 0 0;
  cursor: pointer;
}

.cart {
  border: 1px solid #d8d8d8;
  padding: 5px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

.reviews-check {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}

.reviews-check h2 {
  text-align: center;
  flex: 0 0 100%;
}

.reviews-check ul {
  flex: 0 0 100%;
  display: flex;
  flex-wrap: wrap;
}

.reviews-check ul li {
  flex: 0 0 30%;
  list-style-type: upper-roman;
}

.tab {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>