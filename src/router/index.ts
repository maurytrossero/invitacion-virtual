import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'
import InvitationView from '../views/InvitationView.vue'
import AuthCallback from '@/components/AuthCallback.vue'
import SongsList from '@/views/SongsList.vue'; // Asegúrate de que este camino sea correcto
import BirthdayView from '@/views/BirthdayView.vue';
import BirthdaysongsListview from '@/views/BithddaysongsListview.vue';
import TriviaresultView from '@/views/TriviaresultView.vue';
import WeddingView from '@/views/WeddingView.vue';
import VistaAsistentes from '@/components/fifteen/InvitadosComponent.vue'
import VistaAsistentesMaia from '@/components/maia-fifteen-invitation/InvitadosComponent.vue'
import UploadGalleryView from '@/views/UploadGalleryView.vue'
import GalleryView from '@/views/GalleryView.vue'



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

  //Rutas para Kyara
  {
  path: '/invitacion-kyara',
  name: 'FifteenView',
  component: () => import('@/views/FifteenView.vue')
  },
  {
    path: '/invitacion-kyara-invitados',
    name: 'Asistentes',
    component: VistaAsistentes
  },
  {
  path: '/invitacion-kyara-mesas',
  name: 'MesasKiara',
  component: () => import('@/components/fifteen/MesaManager.vue')
  },

  {
  path: '/invitacion-kyara-gestion',
  name: 'GestionKiara',
  component: () => import('@/components/fifteen/ManagerComponent.vue')
  },
  {
  path: '/invitacion-kyara-musica-sugerida',
  name: 'ListadoMusicaSugeridaKiara',
  component: () => import('@/components/fifteen/MusicComponent.vue')
  },
  {
  path: '/invitacion-kyara-lista-invitados',
  name: 'ListadoInvitadosKiara',
  component: () => import('@/components/fifteen/MesaList.vue')
  },
//Rutas para Maia
  {
  path: '/invitacion-maia',
  name: 'MaiaFifteenView',
  component: () => import('@/views/MaiaFifteenView.vue')
  },
  {
    path: '/invitacion-maia-invitados',
    name: 'MaiaAsistentes',
    component: VistaAsistentesMaia
  },
  {
  path: '/invitacion-maia-mesas',
  name: 'MaiaMesas',
  component: () => import('@/components/maia-fifteen-invitation/MesaManager.vue')
  },

  {
  path: '/invitacion-maia-gestion',
  name: 'MaiaGestion',
  component: () => import('@/components/maia-fifteen-invitation/ManagerComponent.vue')
  },
  {
  path: '/invitacion-maia-musica-sugerida',
  name: 'ListadoMusicaSugeridaMaia',
  component: () => import('@/components/maia-fifteen-invitation/MusicComponent.vue')
  },
  {
  path: '/invitacion-maia-lista-invitados',
  name: 'ListadoInvitadosMaia',
  component: () => import('@/components/maia-fifteen-invitation/MesaList.vue')
  },

  //vistas para la galeria de imagenes en vivo
  {
    path: '/subir-foto',
    name: 'UploadGallery',
    component: UploadGalleryView
  },
  {
    path: '/galeria',
    name: 'Gallery',
    component: GalleryView
  },
  {
  path: '/moderar',
  name: 'Moderation',
  component: () => import('@/views/ModerationView.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL || '/'), 
  routes
})

export default router
