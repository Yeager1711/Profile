import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },

  {
    path: '/home',
    component: () => import('../views/HomeView.vue')
  },

  {
    path:'/links',
    component: () => import('../views/ProductsView.vue')
  },

  {
    path:'/other/page/managent/admin',
    component: () => import('../views/AdminView.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
