import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Products from './views/Products';
import Skills from './views/Skills';

Vue.use(Router);

export default new Router({
    routes: [
      { path: '/', name: 'home', component: Home },
      { path: '/about', name: 'about', component: About },
      { path: '/products', name: 'products', component: Products },
      { path: '/skills', name: 'skills', component: Skills }
    ]
  });