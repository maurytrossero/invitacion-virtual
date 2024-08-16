import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
import InvitationView from '../views/InvitationView.vue'
import AuthCallback from '@/components/AuthCallback.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'portfolio-view',
    component: PortfolioView
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
