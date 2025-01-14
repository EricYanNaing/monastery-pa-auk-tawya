import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Monk from '../views/Sayadaw_bio.vue'
import Monastery from '../views/Monastery.vue'
import Donator from '../views/Donator.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sayadaw-bio',
    name: 'Monks',
    component: Monk
  },
  {
    path: '/donator',
    name: 'Donator',
    component: Donator
  },
  {
    path: '/monastery',
    name: 'Monastery',
    component: Monastery
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router