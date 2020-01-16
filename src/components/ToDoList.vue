<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />

    <div v-for="(todo, index) in todosFiltered" :key="todo.id" class="todo-item">
      <div class="todo-item-left">
        <input type="checkbox" v-model="todo.completed" />
        <p
          v-if="!todo.editing"
          @dblclick="editToDo(todo)"
          class="todo-item-label"
          :class="{ completed : todo.completed }"
        >{{ todo.title }}</p>

        <input
          v-else
          class="todo-item-edit"
          type="text"
          v-model="todo.title"
          @blur="doneEdit(todo)"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
          v-focus
        />
        <!-- v-focus custom directive doesnt work properly -->
      </div>
      <p class="remove-item" @click="removeToDo(index)">&times;</p>
    </div>

    <div class="extra-container">
      <div>
        <label>
          <input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos" />Check All
        </label>
      </div>

      <p>{{ remaining }} items left</p>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{ active: filter == 'all'}" @click="filter = 'all'">All</button>
        <button :class="{ active: filter == 'active'}" @click="filter = 'active'">Active</button>
        <button :class="{ active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
      </div>

      <p>Clear completed</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      beforeEditCache: "",
      filter: "all",
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
    }
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
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
    editToDo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = true;
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.ending = false;
    },
    doneEdit(todo) {
      if (todo.title.trim().length == 0) {
        todo.title = this.beforeEditCache;
      }

      todo.editing = false;
    },
    removeToDo(index) {
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach(todo => (todo.completed = event.target.checked));
    }
  }
};
</script>

<style scoped>
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

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
}

.remove-item:hover {
  color: #000;
}

.todo-item-left {
  display: flex;
  align-items: center;
  flex: 0 0 80%;
  margin: 0;
}

.todo-item-label {
  padding: 10px;
  /* border: 1px solid #fff; */
}

.todo-item-edit {
  font-size: 18px;
  color: #2c3e50;
  padding: 10px;
  margin-left: 5px;
  /* width: 100%; */
  /* border: 1px solid #ccc; */
}

.todo-item-edit:hover {
  outline: none;
}

.completed {
  text-decoration: line-through;
  color: gray;
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
  flex: 0 0 70%;
  margin-left: 0;
}

button {
  font-size: 14px;
  background-color: #fff;
  appearance: none;
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