<template>
  <div class="button-container">
    <button :class="{ active: filter == 'all'}" @click="changeFilter('all')">All</button>
    <button :class="{ active: filter == 'active'}" @click="changeFilter('active')">Active</button>
    <button :class="{ active: filter == 'completed'}" @click="changeFilter('completed')">Completed</button>
  </div>
</template>

<script>
// import { EventBus } from "../main";

export default {
  name: "TodoFiltered",
  computed: {
    filter() {
      return this.$store.state.filter;
    }
  },
  methods: {
    changeFilter(filter) {
      this.$store.dispatch('updateFilter', filter);
    }
  }
};
</script>

<style scoped>
button {
  flex: 0 0 35%;
  font-size: 14px;
  background-color: #fff;
  appearance: none;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 4px;
  margin: 0 10px;
  cursor: pointer;
}

button:hover {
  background-color: lightgreen;
}

button:focus {
  outline: none;
}

.active {
  background-color: lightgreen;
}
</style>