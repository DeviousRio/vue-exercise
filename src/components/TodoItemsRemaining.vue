<template>
  <p>{{ remaining }} items left</p>
</template>

<script>
export default {
  name: "TodoItemsRemaining",
  props: {
    remaining: {
      type: Number,
      required: true
    }
  }
};
</script>