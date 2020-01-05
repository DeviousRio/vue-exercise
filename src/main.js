import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Router);

import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/products', name: 'products', component: Products }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
