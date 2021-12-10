import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/reservia',
    name: 'Reservia',
    component: () => import('../views/Reservia.vue'),
  },
  {
    path: '/ohmyfood',
    name: 'OhMyFood',
    component: () => import('../views/OhMyFood.vue'),
  },
  {
    path: '/lachouetteagence',
    name: 'LaChouetteAgence',
    component: () => import('../views/LaChouetteAgence.vue'),
  },
  {
    path: '/orinoco',
    name: 'Orinoco',
    component: () => import('../views/Orinoco.vue'),
  },
  {
    path: '/thehottestreview',
    name: 'TheHottestReview',
    component: () => import('../views/TheHottestReview.vue'),
  },
  {
    path: '/groupomania',
    name: 'Groupomania',
    component: () => import('../views/Groupomania.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
