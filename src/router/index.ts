import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
import InvitationView from '../views/InvitationView.vue'
import AuthCallback from '@/components/AuthCallback.vue'
import SongsList from '@/views/SongsList.vue'; // Asegúrate de que este camino sea correcto
import BirthdayView from '@/views/BirthdayView.vue';
import BirthdaysongsListview from '@/views/BithddaysongsListview.vue';
import TriviaresultView from '@/views/TriviaresultView.vue';
import WeddingView from '@/views/WeddingView.vue';

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
  },
  {
    path: '/musica', // Ruta para acceder a la lista de canciones
    name: 'songs-list',
    component: SongsList // Componente que se renderizará
  },
  {
    path: '/invitacion-boda-cristian-noe', // Ruta para acceder a la lista de canciones
    name: 'invitacion-boda-cristian-noe',
    component: WeddingView // Componente que se renderizará
  },
  {
    path: '/invitacion-andrea-giron', // Ruta para acceder a la lista de canciones
    name: 'invitacion-andrea-giron',
    component: BirthdayView // Componente que se renderizará
  },
  {
    path: '/invitacion-andrea-giron/musica', // Ruta para acceder a la lista de canciones
    name: 'andrea-giron-musica',
    component: BirthdaysongsListview // Componente que se renderizará
  },
  {
    path: '/invitacion-andrea-giron/resultados-trivia', // Ruta para acceder a la lista de canciones
    name: 'andrea-giron-resultados-trivia',
    component: TriviaresultView // Componente que se renderizará
  },
  {
  path: '/invitacion-kyara',
  name: 'FifteenView',
  component: () => import('@/views/FifteenView.vue')
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
