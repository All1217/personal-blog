/**
 * 文章数据统一管理
 * 所有组件都从该文件导入文章数据，确保一致性
 */
export const articles = [
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
