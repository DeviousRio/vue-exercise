import Vue from 'vue'
import router from './router';
import App from './App.vue'
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { store } from './store/index';

// Exporting global event bus
export const EventBus = new Vue();

// Question: Can i make more of these and reuse them and is this the right file
extend('required', {
  ...required,
  message: 'This field is required'
});

// Register it globally
// main.js or any entry file
Vue.component('ValidationProvider', ValidationProvider);
Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')