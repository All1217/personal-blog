<template>
  <section id="writing">
    <div class="section-container">
      <h2 class="section-title">文字创作</h2>
      <p class="section-subtitle">Writing</p>

      <div class="card-grid">
        <router-link
          v-for="post in posts"
          :key="post.id"
          :to="`/article/${post.id}`"
          class="card post-card"
        >
          <div class="post-meta">
            <time class="post-date">{{ post.date }}</time>
            <span class="post-category">{{ post.category }}</span>
          </div>
          <h3 class="post-title">{{ post.title }}</h3>
          <p class="post-excerpt">{{ post.excerpt }}</p>
          <span class="post-link">阅读更多 →</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { articles } from '../data/articles.js'

// 列表页不需要 body 字段，使用解构排除
const posts = articles.map(({ body, ...rest }) => rest)
</script>

<style scoped>
#writing {
  background: var(--gray);
}

.post-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.85rem;
}

.post-date {
  color: var(--gray-dark);
}

.post-category {
  display: inline-block;
  padding: 2px 10px;
  background: var(--accent-light);
  color: white;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
}

.post-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.4;
}

.post-excerpt {
  color: var(--gray-dark);
  font-size: 0.92rem;
  line-height: 1.6;
  flex: 1;
}

.post-link {
  display: inline-block;
  margin-top: 16px;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  transition: var(--transition);
}

.post-card:hover .post-link {
  gap: 8px;
}
</style>
