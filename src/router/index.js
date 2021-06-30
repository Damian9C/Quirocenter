import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import customers from "../views/customers";
import quotes from "../views/quotes";
import services from "../views/services";
import admin from "../views/admin";

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
    component: customers
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: quotes
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  }
]

const router = new VueRouter({
  routes
})

export default router
