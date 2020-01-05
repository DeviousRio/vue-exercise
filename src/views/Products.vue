<template>
  <div>
    <div class="nav-bar"></div>
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" alt="socks" />
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>
        <span v-if="onSale">On Sale!</span>
        <p v-if="inventory > 10">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out! Only {{ inventory }} left !</p>
        <p v-else>Out of Stock</p>
        <p>{{ description }}</p>
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
      description: 'Faster memory speed, wireless and dual digital mic',
      image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
      link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
      inventory: 10,
      onSale: true
    };
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

.product-info p {
  padding: 5px 0;
}

.product-info a {
  color: #16c0b0;
  font-weight: bold;
  text-decoration: none;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
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