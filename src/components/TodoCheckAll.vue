<template>
  <div>
    <label><input type="checkbox" :checked="!anyRemaining" @change="allChecked" />Check All</label>
  </div>
</template>

<script>
// import { EventBus } from "../main";

export default {
  name: "TodoCheckAll",
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    }
  },
  methods: {
    allChecked() {
      this.$store.dispatch('checkAll', event.target.checked);
    }
  }
};
</script>