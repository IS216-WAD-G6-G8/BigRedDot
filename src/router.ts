import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Pages/Home.vue'
import LandingPage from './components/Pages/LandingPage.vue'
import FireBaseTest from './components/Pages/FirebaseTest.vue'
import About from './components/Pages/About.vue'

const routes = [
  {
    path: '/Home',
    component: Home,
  },
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/Test',
    component: FireBaseTest
  },
  {
    path: '/About',
    component: About
  },
]

export default createRouter({
  history: createWebHistory(),routes
})