<template>
  <div class="directives">
    <h1>Directives Examples</h1>
    <p>{{ greeting }}</p>
    <!-- v-model directive example -->
    <input v-model="greeting" type="text">

    <!-- v-if-else directive example -->
    <div v-if="count >= 5">I am greater or qeual to 5</div>
    <div v-else-if="count < 5 && count >= 0">I am lesser than 5</div>
    <div v-else>I am negative number</div>
  </div>
</template>

<script>
export default {
  name: "DirectivesCmp",
  data() {
    return {
      greeting: "Hello World!",
      count: -1
    };
  }
};
</script>

<style scoped>
.directives {
  text-align: center;
}
</style>