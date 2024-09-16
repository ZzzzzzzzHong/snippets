import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/home', component: () => import('@renderer/views/Home.vue') },
  {
    path: '/config',
    component: () => import('@renderer/views/config/Config.vue'),
    children: [
      {
        path: 'snippets',
        component: () => import('@renderer/views/config/snippets/Snippets.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
