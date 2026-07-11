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
const posts = [
  {
    id: 1,
    title: 'Vue 3 Composition API 实战指南',
    date: '2024-12-15',
    category: '前端',
    excerpt: '深入理解 Vue 3 的 Composition API，通过实际案例掌握 setup、ref、reactive 等核心概念。'
  },
  {
    id: 2,
    title: '从零搭建个人设计系统',
    date: '2024-11-28',
    category: '设计',
    excerpt: '分享如何从零开始构建一套可复用的 UI 设计系统，包含设计令牌、组件规范和文档。'
  },
  {
    id: 3,
    title: '2024 年终技术总结',
    date: '2024-12-31',
    category: '随笔',
    excerpt: '回顾这一年的技术成长，分享学习心得和对未来的展望。'
  },
  {
    id: 4,
    title: 'Web 性能优化实践',
    date: '2024-10-10',
    category: '前端',
    excerpt: '总结实际项目中的性能优化经验，涵盖加载、渲染、运行时等多个维度。'
  }
]
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
