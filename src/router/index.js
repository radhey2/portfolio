import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Resume from '../components/Resume.vue'
import Portfolio from '@/components/Portfolio.vue'
import Service from '@/components/Service.vue'
const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/service',
    name: 'service',
    component: Service
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
