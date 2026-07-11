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
  background: var(--bg);
}

.article-header {
  position: sticky;
  top: 0;
  background: var(--navbar-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--navbar-border);
  z-index: 100;
}

.nav-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 16px 24px;
}

.back-link {
  color: var(--accent);
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
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.article-category {
  display: inline-block;
  padding: 3px 12px;
  background: var(--accent);
  color: var(--bg);
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 32px;
  color: var(--text-heading);
}

.article-body {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text);
}

.article-body h2 {
  font-size: 1.5rem;
  margin: 40px 0 16px;
  font-weight: 700;
  color: var(--text-heading);
}

.article-body p {
  margin-bottom: 16px;
}

.article-body pre {
  background: var(--bg-alt);
  border-radius: var(--radius-sm);
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
  border-top: 1px solid var(--border);
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
  color: var(--text-heading);
}

.article-not-found p {
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.back-home {
  display: inline-block;
  padding: 10px 24px;
  background: var(--accent);
  color: var(--bg);
  text-decoration: none;
  border-radius: var(--radius-sm);
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
