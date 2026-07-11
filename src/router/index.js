import { createRouter, createWebHistory } from 'vue-router'

/**
 * 路由懒加载：使用动态 import() 实现按需加载
 * Vite 会自动为每个动态导入生成独立的 chunk，减小首屏打包体积
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
