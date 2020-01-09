<template>
  <div class="holder">
    <form @submit.prevent="addSkill">
      <ValidationProvider rules="required" v-slot="{ errors }">
        <input v-model="skill" name="skill" type="text" class="text-input" placeholder="Enter a skill you have..." />

        <!-- Added errors animation -->
        <transition name="alert-in">
            <p class="alert" v-if="errors.length > 0">{{ errors[0] }}</p>
        </transition>

      </ValidationProvider>
      <input type="submit" />
    </form>

      <!-- Added group animations -> https://daneden.github.io/animate.css/ -->
      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated flipOut">
          <li v-for="(data, index) in skills" :key="index">{{ data.skill }}
            <i class="fas fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
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
      if (this.skill !== "" && this.skill.length >= 2) {
        this.skills.push({ skill: this.skill });
      } else {
        return;
      }
      this.skill = "";
    },
    remove(id) {
      this.skills.splice(id, 1);
    }
  }
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.css");

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

ul li i {
  float: right;
  cursor: pointer;
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

.alert {
  background-color: #fdf2ce;
  font-weight: bold;
  padding: 5px;
  display: inline-block;
}

.alert-in-enter-active {
    animation: bounce-in .5s;
}

.alert-in-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
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