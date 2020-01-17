<template>
  <button
    v-if="showClearCompletedButton"
    @click="clearCompleted"
    class="clear-button"
  >Clear Completed</button>
</template>

<script>
import { EventBus } from "../main";

export default {
  name: "TodoClearCompleted",
  props: {
    showClearCompletedButton: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    clearCompleted() {
      EventBus.$emit("clearCompletedTodos");
    }
  }
};
</script>

<style scoped>
.clear-button {
  flex: 0 0 20%;
  font-size: 14px;
  background-color: #fff;
  appearance: none;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 4px;
  margin: 0 10px;
  cursor: pointer;
}

.clear-button:hover {
  background-color: lightgreen;
}

.clear-button:focus {
  outline: none;
}

.active {
  background-color: lightgreen;
}
</style>