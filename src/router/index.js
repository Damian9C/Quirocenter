import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import customers from "../views/customers";
import quotes from "../views/quotes";
import services from "../views/services";
import admin from "../views/admin";
import role from "../views/role";
import editService from "../views/editService";
import forgotPass from "../views/forgotPass";
import firebase from "firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/customers',
    name: 'customers',
    component: customers,
    meta:{
      requestAuth: true
    }
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: quotes,
    meta:{
      requestAuth: true
    }
  },
  {
    path: '/services',
    name: 'services',
    component: services,
    meta:{
      requestAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    meta:{
      requestAuth: true
    }
  },
  {
    path: '/role',
    name: 'role',
    component: role,
    meta:{
      requestAuth: true
    }
  },
  {
    path: '/editService',
    name: 'editService',
    component: editService,
    meta:{
      requestAuth: true
    }
  },
  {
    path: '/forgotPass',
    name: 'forgotPass',
    component: forgotPass
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requestAuth)){
    const user = firebase.auth().currentUser;
    if (user){
      next();
    }else{
      next({name:'home'});
    }
  }else {
    next();
  }
});

export default router
