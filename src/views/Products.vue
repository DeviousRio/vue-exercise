<template>
  <div>
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="socks" />
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>

        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out! Only {{ inventory }} left !</p>
        <p v-else>Out of Stock</p>

        <p>{{ description }}</p>

        <ul>
          <li v-for="detail in details" v-bind:key="detail.id">
            <p>{{ detail }}</p>
          </li>
        </ul>

        <div class="colorType" v-for="variant in variants" v-bind:key="variant.variantId">
          <p @mouseover="updateProduct(variant.variantImage)">{{ variant.variantColor }}</p>
        </div>

        <button class="cart-button" @click="addToCart">Add to Cart</button>
        <button class="cart-remove" @click="removeFromCart">Remove from Cart</button>

        <div class="cart">
          <p>Cart({{cart}})</p>
        </div>

        <a v-bind:href="link" target="_blank">Click here to see more products like this</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      product: "Socks",
      description: "Faster memory speed, wireless and dual digital mic",
      link: "https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks",
      image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
      inventory: 10,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 1,
          variantColor: 'green',
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
        },
        {
          variantId: 2,
          variantColor: 'blue',
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
        }
      ],
      cart: 0,
    };
  },
    methods: {
        addToCart() {
          this.cart += 1;
        },
        removeFromCart() {
          this.cart -= 1;
        },
        updateProduct(variantImage) {
          this.image = variantImage;
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

.product-info .cart-button {
  cursor: pointer;
  flex: 0 0 15%;
  padding: 10px;
  margin-top: 7px;
}

.product-info .cart-remove {
  cursor: pointer;
  flex: 0 0 17%;
  padding: 5px;
  margin: 7px 15px;
}

.product-info .cart {
  flex: 0 0 17%;
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
  margin-top: 5px;
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

.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
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