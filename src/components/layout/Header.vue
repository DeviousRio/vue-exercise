<template>
  <header class="header">
    <h1>VueJS Exercises</h1>
    <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/skills">Skills</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.header a {
  color: #fff;
  padding: 0 10px;
  text-decoration: none;
  border-right: 2px solid #fff;
}

.header a:last-child {
  border-right: none;
}
</style>