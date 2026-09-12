import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/writing',
    name: 'WritingIndex',
    component: () => import('../views/WritingIndex.vue')
  },
  {
    path: '/writing/:category/:slug',
    name: 'Writing',
    component: () => import('../views/WritingView.vue')
  },
  {
    path: '/writing/:category',
    name: 'WritingCategory',
    component: () => import('../views/WritingIndex.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
