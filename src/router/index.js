import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Profile from '../views/profile/Profile.vue'
import ShopCart from '../views/shopCart/ShopCart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/shopCart',
    component: ShopCart
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
