<template>
  <div class="article-page">
    <header class="article-header">
      <div class="nav-container">
        <router-link to="/" class="back-link">← 返回首页</router-link>
      </div>
    </header>

    <article class="article-content" v-if="article">
      <div class="article-meta">
        <time class="article-date">{{ article.date }}</time>
        <span class="article-category">{{ article.category }}</span>
      </div>
      <h1 class="article-title">{{ article.title }}</h1>
      <div class="article-body" v-html="article.body"></div>
    </article>

    <div class="article-not-found" v-else>
      <h2>文章未找到</h2>
      <p>抱歉，没有找到该文章。</p>
      <router-link to="/" class="back-home">返回首页</router-link>
    </div>

    <footer class="article-footer">
      <router-link to="/" class="back-link">← 返回首页</router-link>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { articles } from '../data/articles.js'

const route = useRoute()

const article = computed(() => {
  const id = Number(route.params.id)
  return articles.find(a => a.id === id) || null
})
</script>

<style scoped>
.article-page {
  min-height: 100vh;
  background: var(--bg, #ffffff);
}

.article-header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  z-index: 100;
}

.nav-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px 24px;
}

.back-link {
  color: var(--accent, #4FC08D);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: opacity 0.3s;
}

.back-link:hover {
  opacity: 0.7;
}

.article-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 24px 40px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.article-date {
  color: var(--gray-dark, #666);
  font-size: 0.9rem;
}

.article-category {
  display: inline-block;
  padding: 3px 12px;
  background: var(--accent-light, #6dd5a0);
  color: white;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 32px;
  color: var(--text, #1a1a2e);
}

.article-body {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text, #1a1a2e);
}

.article-body h2 {
  font-size: 1.5rem;
  margin: 40px 0 16px;
  font-weight: 700;
}

.article-body p {
  margin-bottom: 16px;
}

.article-body pre {
  background: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  overflow-x: auto;
  margin: 20px 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

.article-body code {
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.article-footer {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.article-not-found {
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 24px;
  text-align: center;
}

.article-not-found h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.article-not-found p {
  color: var(--gray-dark, #666);
  margin-bottom: 24px;
}

.back-home {
  display: inline-block;
  padding: 10px 24px;
  background: var(--accent, #4FC08D);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
}

@media (max-width: 768px) {
  .article-content {
    padding: 40px 20px 32px;
  }
  .article-title {
    font-size: 1.6rem;
  }
  .article-footer {
    padding: 32px 20px 60px;
  }
}
</style>
