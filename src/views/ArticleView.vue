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
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const articles = [
  {
    id: 1,
    title: 'Vue 3 Composition API 实战指南',
    date: '2024-12-15',
    category: '前端',
    excerpt: '深入理解 Vue 3 的 Composition API，通过实际案例掌握 setup、ref、reactive 等核心概念。',
    body: `
      <h2>前言</h2>
      <p>Vue 3 的 Composition API 是一套全新的逻辑复用方案，它让我们能够以更灵活、更可维护的方式组织组件代码。</p>

      <h2>1. setup 函数</h2>
      <p>setup 是 Composition API 的入口，它在组件创建之前执行，是使用组合式 API 的起点。</p>
      <pre><code>import { ref, reactive } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const state = reactive({ name: 'Vue' })
    return { count, state }
  }
}</code></pre>

      <h2>2. ref 与 reactive</h2>
      <p>ref 用于创建基本类型的响应式数据，reactive 用于创建对象类型的响应式数据。二者是 Composition API 的基石。</p>

      <h2>3. computed 与 watch</h2>
      <p>computed 用于创建派生状态，watch 用于监听数据变化并执行副作用。它们是构建复杂逻辑的重要工具。</p>

      <h2>总结</h2>
      <p>Composition API 让代码组织更加灵活，逻辑复用更加方便。建议在大型项目中优先使用。</p>
    `
  },
  {
    id: 2,
    title: '从零搭建个人设计系统',
    date: '2024-11-28',
    category: '设计',
    excerpt: '分享如何从零开始构建一套可复用的 UI 设计系统，包含设计令牌、组件规范和文档。',
    body: `
      <h2>什么是设计系统？</h2>
      <p>设计系统是一套完整的设计语言和组件库的集合，它帮助团队保持产品的一致性，提高设计和开发效率。</p>

      <h2>1. 设计令牌 (Design Tokens)</h2>
      <p>设计令牌是设计系统的基础，包括颜色、字体、间距、阴影等基本设计变量的命名规范。</p>

      <h2>2. 组件规范</h2>
      <p>从基础组件到复合组件，每一层都需要明确的规范和用法说明。</p>

      <h2>3. 文档化</h2>
      <p>好的文档是设计系统的灵魂，它让团队成员能够快速理解和使用设计规范。</p>

      <h2>总结</h2>
      <p>搭建设计系统是一个长期迭代的过程，建议从最常用的组件开始，逐步完善。</p>
    `
  },
  {
    id: 3,
    title: '2024 年终技术总结',
    date: '2024-12-31',
    category: '随笔',
    excerpt: '回顾这一年的技术成长，分享学习心得和对未来的展望。',
    body: `
      <h2>回顾 2024</h2>
      <p>这一年是技术飞速发展的一年，AI 工具、前端框架、跨端方案都带来了很多惊喜。</p>

      <h2>技术收获</h2>
      <p>深入学习了 Vue 3 生态、TypeScript 类型系统和现代 CSS 特性，这些都让开发体验有了质的提升。</p>

      <h2>开源贡献</h2>
      <p>参与了几个开源项目的维护，深刻体会到社区的力量和分享的价值。</p>

      <h2>展望 2025</h2>
      <p>新的一年希望能更加深入底层，关注 WebAssembly、Rust 等新技术方向。</p>
    `
  },
  {
    id: 4,
    title: 'Web 性能优化实践',
    date: '2024-10-10',
    category: '前端',
    excerpt: '总结实际项目中的性能优化经验，涵盖加载、渲染、运行时等多个维度。',
    body: `
      <h2>加载优化</h2>
      <p>通过代码分割、懒加载、预加载等策略，有效减少首屏加载时间。</p>

      <h2>渲染优化</h2>
      <p>合理使用虚拟列表、CSS contain、will-change 等特性，提升页面渲染性能。</p>

      <h2>运行时优化</h2>
      <p>避免不必要的重渲染，合理使用 computed 和 watch，优化事件处理。</p>

      <h2>工具与监控</h2>
      <p>善用 Chrome DevTools、Lighthouse、Web Vitals 等工具进行性能监控和分析。</p>

      <h2>总结</h2>
      <p>性能优化是一个持续的过程，需要在开发中时刻关注，建立性能预算和监控体系。</p>
    `
  }
]

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
