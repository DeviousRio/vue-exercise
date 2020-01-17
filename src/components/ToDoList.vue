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
        v-for="(todo, index) in todosFiltered"
        :key="todo.id"
        :todo="todo"
        :index="index"
        :checkAll="!anyRemaining"
      />
    </transition-group>

    <div class="extra-container">
      <TodoCheckAll :anyRemaining="anyRemaining" />

      <TodoItemsRemaining :remaining="remaining" />
    </div>

    <div class="extra-container">
      <TodoFiltered />

      <transition name="fade">
        <TodoClearCompleted :showClearCompletedButton="showClearCompletedButton" />
      </transition>
    </div>
  </div>
</template>

<script>
import { EventBus } from "../main";
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
      filter: "all",
      beforeEditCache: "",
      todos: [
        {
          id: 1,
          title: "Finish Vue Screencast",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "Take over world",
          completed: false,
          editing: false
        }
      ]
    };
  },
  created() {
    EventBus.$on("removedTodo", index => this.removeTodo(index));
    EventBus.$on("finishedEdit", data => this.finishedEdit(data));
    EventBus.$on("checkAllChanged", checked => this.checkAllTodos(checked));
    EventBus.$on("filterChanged", filter => (this.filter = filter));
    EventBus.$on("clearCompletedTodos", () => this.clearCompleted());
  },
  beforeDestroy() {
    EventBus.$off("removedTodo", index => this.removeTodo(index));
    EventBus.$off("finishedEdit", data => this.finishedEdit(data));
    EventBus.$off("checkAllChanged", checked => this.checkAllTodos(checked));
    EventBus.$off("filterChanged", filter => (this.filter = filter));
    EventBus.$off("clearCompletedTodos", () => this.clearCompleted());
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining != 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter(todo => !todo.completed);
      } else if (this.filter == "completed") {
        return this.todos.filter(todo => todo.completed);
      }

      return this.todos;
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() == "") {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach(todo => (todo.completed = event.target.checked));
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
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