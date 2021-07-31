import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

import HomeComponent from './components/Home.vue';
import CreateComponent from './components/BlogCreate.vue';
import BlogComponent from './components/BlogView.vue';
import SignupComponent from './components/user/Signup.vue';
import LoginComponent from './components/user/Login.vue';
const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
    name: 'Blog',
    path: '/blogs',
    component: BlogComponent
    },
  {
    name:'Signup',
    path:'/signup',
    component:SignupComponent   
  },
  {
    name:'Login',
    path:'/login',
    component:LoginComponent   
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

export default router;
