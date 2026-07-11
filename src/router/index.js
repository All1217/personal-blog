import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticleView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
