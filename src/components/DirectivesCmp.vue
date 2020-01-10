<template>
  <div class="directives">
    <h1>Directives Examples</h1>

    <!-- v-model directive example -->
    <span>v-model example</span>
    <p>{{ greeting }}</p>
    <input v-model="greeting" type="text" />

    <!-- v-if-else directive example -->
    <span>v-if, v-else-if, v-else example</span>
    <div v-if="count >= 5">I am greater or qeual to 5</div>
    <div v-else-if="count < 5 && count >= 0">I am lesser than 5</div>
    <div v-else>I am negative number</div>

    <!-- v-show wont appear if the condition is false but still rendered into the DOM -> display: none  -->
    <span>v-show example</span>
    <div v-show="count === -1">v-show</div>

    <!-- v-once -->
    <span>v-once example</span>
    <p v-once>{{ email }}</p>
    <p>{{ email }}</p>

    <!-- v-bind example -->
    <span>v-bind example</span>
    <input v-model="email" v-bind:class="[email.length <= 2 ? 'red' : 'green']" />
    <button onclick="alert('signed up')" v-bind:disabled="email.length < 2">Submit</button>

    <!-- v-for example -->
    <span>v-for example</span>
    <ul>
      <!-- :key is short syntax from v-bind:key -->
      <li v-for="(person, key) in persons" :key="key">{{person}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DirectivesCmp",
  data() {
    return {
      greeting: "Hello World!",
      count: -1,
      email: "pesho@pesho.com",
      persons: ["Stamat", "Pesho", "Gosho"]
    };
  }
};
</script>

<style scoped>
.directives {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.directives h1 {
  border-bottom: 1px solid #000;
}

.directives input {
  flex: 0 0 50%;
}

.directives span {
  font-weight: bold;
}

.directives h1,
p,
div,
span {
  flex: 0 0 100%;
  text-align: center;
  margin: 0.5em;
}

.red {
  border: 2px solid red;
}

.green {
  border: 2px solid green;
}
</style>