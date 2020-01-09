import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'This field is required'
});

// Register it globally
// main.js or any entry file
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

Vue.use(Router);

import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Skills from './views/Skills';

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/products', name: 'products', component: Products },
    { path: '/skills', name: 'skills', component: Skills }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
