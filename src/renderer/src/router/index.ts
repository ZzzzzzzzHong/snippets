import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/home', component: () => import('@renderer/views/Home.vue') },
  { path: '/config', component: () => import('@renderer/views/Config.vue') }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
