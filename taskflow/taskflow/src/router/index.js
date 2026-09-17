import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/stats',
    name: 'stats',
    // Import dynamique : Vite/Rollup génère un chunk séparé pour cette page,
    // qui n'est chargé qu'à la navigation vers /stats (optimisation de performance).
    component: () => import('@/views/StatsView.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
