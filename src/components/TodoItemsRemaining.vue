<template>
  <p>{{ remaining }} items left</p>
</template>

<script>
export default {
  name: "TodoItemsRemaining",
  computed: {
    remaining() {
      return this.$store.getters.remaining;
    }
  }
};
</script>