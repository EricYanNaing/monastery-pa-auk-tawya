import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Monks from '../views/Monks.vue'
// import About from '../views/About.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/monks',
  //   name: 'Monks',
  //   component: Monks
  // },
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