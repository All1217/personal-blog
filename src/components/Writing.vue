<script setup>
import { ref } from 'vue'

const articles = ref([
  {
    date: '2025.06',
    category: '技术',
    title: '从 0 搭建一个 Vue3 组件库',
    desc: '记录我从零开始搭建个人组件库的全过程，包括工程化、打包、文档生成等。',
    tag: '前端'
  },
  {
    date: '2025.05',
    category: '随笔',
    title: '深夜代码与咖啡',
    desc: '一些关于写代码时的思考与感悟，关于专注、心流和那些 Bug 教会我的事。',
    tag: '生活'
  },
  {
    date: '2025.04',
    category: '技术',
    title: 'CSS 现代布局完全指南',
    desc: '从 Flexbox 到 Grid，从容器查询到层叠上下文，一文掌握现代 CSS 布局方案。',
    tag: 'CSS'
  },
  {
    date: '2025.03',
    category: '小说',
    title: '像素城市的黄昏',
    desc: '一个关于 AI 与人类共存的短篇科幻故事——当代码拥有了灵魂。',
    tag: '创作'
  }
])
</script>

<template>
  <section id="writing" class="section">
    <div class="container">
      <h2 class="section-title"><span class="title-deco">✦</span> 文字创作</h2>
      <div class="writing-list">
        <div v-for="(article, index) in articles" :key="index" class="writing-item">
          <div class="writing-meta">
            <span>{{ article.date }}</span>
            <span class="writing-tag">{{ article.category }}</span>
          </div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.writing-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 780px;
}

.writing-item {
  background: var(--bg-alt);
  padding: 24px 28px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  transition: var(--transition);
  cursor: default;
}

.writing-item:hover {
  border-color: var(--accent-light);
  box-shadow: var(--shadow);
}

.writing-meta {
  display: flex;
  gap: 12px;
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 6px;
}

.writing-item h3 {
  font-size: 1.1rem;
  margin-bottom: 6px;
}

.writing-item p {
  color: var(--text-secondary);
  font-size: 0.93rem;
  line-height: 1.6;
}

.writing-tag {
  display: inline-block;
  padding: 2px 10px;
  background: rgba(108, 92, 231, 0.08);
  color: var(--accent);
  border-radius: 50px;
  font-size: 0.75rem;
}
</style>
