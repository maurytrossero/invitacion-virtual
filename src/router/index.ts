import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InvitationView from '../views/InvitationView.vue'
import AuthCallback from '@/components/AuthCallback.vue' // Asegúrate de crear este componente

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth/instagram/callback',
    name: 'auth-callback',
    component: AuthCallback
  },
  {
    path: '/invitacion',
    name: 'invitacion-virtual',
    component: InvitationView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
