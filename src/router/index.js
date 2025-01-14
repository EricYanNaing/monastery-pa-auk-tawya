import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Monk from '../views/Sayadaw_bio.vue'
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'

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
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router