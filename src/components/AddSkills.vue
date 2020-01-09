<template>
  <div class="holder">
    <form @submit.prevent="addSkill">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <input
          v-model="skill"
          name="skill"
          type="text"
          class="text-input"
          placeholder="Enter a skill you have..."
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
      <input type="submit" />
    </form>

    <ul>
      <li v-for="(data, index) in skills" :key="index">{{ data.skill }}</li>
    </ul>

    <p>These are the skills that you possess.</p>

    <!-- Insert alert class only if the boolean showAlert is true -->
    <!-- Added second class if showClass is true -->
    <!-- <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div> -->

    <!-- Binding inline styles - Object syntax  -->
    <!-- <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div> -->
  </div>
</template>

<script>
export default {
  name: "AddSkills",
  data() {
    return {
      skill: "",
      skills: [
        { skill: "Vue.js" },
        { skill: "React.js" },
        { skill: "Angular.js" }
      ]
      //   showAlert: true,
      //   showClass: true
      // bgColor: "yellow",
      // bgWidth: "100%",
      // bgHeight: '30px'
    };
  },
  methods: {
    addSkill() {
      if (this.skill !== "") {
        this.skills.push({ skill: this.skill });
      } else {
        return;
      }
      this.skill = "";
    }
  }
};
</script>

<style scoped>
.holder {
  margin-top: 1em;
  padding: 2em;
  background-color: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

form span {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 0 0 100%;
}

form span input {
  flex: 0 0 100%;
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

input[type="submit"] {
  flex: 0 0 20%;
  margin: 1em;
  padding: 5px;
  cursor: pointer;
}

/* div ul li {
  padding: 5px;
  text-align: center;
} */

/* .alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}

.another-class {
    border: 5px solid #000;
} */
</style>