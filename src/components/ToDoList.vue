<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />

    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
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
        />
        <!-- v-focus custom directive doesnt work -->
      </div>
      <p class="remove-item" @click="removeToDo(index)">&times;</p>
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
  //   direvtives: {
  //     focus: {
  //       inserted: function(el) {
  //         el.focus();
  //       }
  //     }
  //   },
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
</style>