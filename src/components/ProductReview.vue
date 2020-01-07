<template>
  <!-- @submit.prevent the page wont refresh when the submit button is clicked -->
  <form class="review-form" @submit.prevent="onSubmit">
    <p class="errors" v-if="errors.length">
        <ul>
            <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
        </ul>
    </p>

    <div>
      <label for="name">Name:</label>
      <input id="name" v-model="name" />
    </div>

    <div>
      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>
    </div>

    <div>
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option></option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </div>

    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  name: "ProductReview",
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      errors: []
    };
  },
  methods: {
    onSubmit() {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating
        };
        this.$emit("review-submitted", productReview),
          (this.name = null),
          (this.review = null),
          (this.rating = null);
      } else {
          if (!this.name) this.errors.push("Name required!")
          if (!this.review) this.errors.push("Review required!")
          if (!this.name) this.errors.push("Rating required!")
      }
    }
  }
};
</script>

<style scoped>
.review-form {
  width: 400px;
  padding: 20px;
  margin: 40px 40px 40px 0;
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
</style>