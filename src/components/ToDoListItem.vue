<!-- Child Component -->
<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" @change="doneEdit" />
      <p
        v-if="!editing"
        @dblclick="editTodo"
        class="todo-item-label"
        :class="{ completed : completed }"
      >{{ title }}</p>

      <input
        v-else
        class="todo-item-edit"
        type="text"
        v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        v-focus
      />
    </div>

    <button @click="pluralize">Plural</button>
    <p class="remove-item" @click="removeTodo(index)">&times;</p>
  </div>
</template>

<script>
import { EventBus } from "../main";

export default {
  name: "ToDoListItem",
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      editing: this.todo.editing,
      beforeEditCache: ""
    };
  },
  created() {
    EventBus.$on("pluralize", this.handlePluralize);
  },
  beforeDestroy() {
    EventBus.$off("pluralize", this.handlePluralize);
  },
  watch: {
    checkAll() {
      if (this.checkAll) {
        this.completed = true;
      } else {
        this.completed = this.todo.completed;
      }
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
    removeTodo(index) {
      EventBus.$emit("removedTodo", index);
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    doneEdit() {
      if (this.title.trim().length == "") {
        this.title = this.beforeEditCache;
      }

      this.editing = false;
      EventBus.$emit("finishedEdit", {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing
        }
      });
    },
    cancelEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
    pluralize() {
      EventBus.$emit("pluralize");
    },
    handlePluralize() {
      this.title = this.title + "s";
      EventBus.$emit("finishedEdit", {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          editing: this.editing
        }
      });
    }
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation-duration: 0.3s;
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
}

.todo-item-edit:hover {
  outline: none;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
}

.remove-item:hover {
  color: #000;
}

button {
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
</style>