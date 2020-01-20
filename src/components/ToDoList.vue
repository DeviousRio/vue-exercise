<!-- Parent Component -->
<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />

    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <ToDoListItem
        v-for="todo in todosFiltered"
        :key="todo.id"
        :todo="todo"
        :checkAll="!anyRemaining"
      />
    </transition-group>

    <div class="extra-container">
      <TodoCheckAll />

      <TodoItemsRemaining />
    </div>

    <div class="extra-container">
      <TodoFiltered />

      <transition name="fade">
        <TodoClearCompleted />
      </transition>
    </div>
  </div>
</template>

<script>
// import { EventBus } from "../main";
import ToDoListItem from "./ToDoListItem";
import TodoItemsRemaining from "./TodoItemsRemaining";
import TodoCheckAll from "./TodoCheckAll";
import TodoFiltered from "./TodoFiltered";
import TodoClearCompleted from "./TodoClearCompleted";

export default {
  name: "todo-list",
  components: {
    ToDoListItem,
    TodoItemsRemaining,
    TodoCheckAll,
    TodoFiltered,
    TodoClearCompleted
  },
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
    };
  },
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining;
    },
    todosFiltered() {
      return this.$store.getters.todosFiltered;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() == "") {
        return;
      }

      this.$store.dispatch('addTodo', {
        id: this.idForTodo,
        title: this.newTodo
      });

      this.newTodo = "";
      this.idForTodo++;
    }
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

div {
  max-width: 600px;
  margin: 1em auto;
  font-size: 18px;
}

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 10px;
}

.todo-input:focus {
  outline: 0;
}

.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}

.extra-container div {
  flex: 0 0 60%;
  margin-left: 0;
}

.button-container {
  display: flex;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>