<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    icon: '🎨',
    title: 'Design System',
    desc: '一套轻量级 Vue3 组件库，包含 30+ 常用组件，支持按需引入与主题定制。',
    tech: ['Vue3', 'TypeScript', 'Rollup']
  },
  {
    icon: '📝',
    title: 'Noteblog',
    desc: 'Markdown 驱动的个人笔记与博客系统，支持实时预览、标签分类与全文搜索。',
    tech: ['Nuxt', 'MDC', 'SQLite']
  },
  {
    icon: '🌤',
    title: 'Weather Canvas',
    desc: '可视化天气应用，使用 Canvas 实现动态天气粒子效果，数据来源于 OpenWeather。',
    tech: ['Canvas', 'API', 'CSS']
  },
  {
    icon: '🤖',
    title: 'ChatUI',
    desc: '可嵌入的 AI 对话界面组件，支持流式输出、多轮对话与自定义插件。',
    tech: ['WebSocket', 'Vue3', 'Node.js']
  }
])
</script>

<template>
  <section id="projects" class="section alt-bg">
    <div class="container">
      <h2 class="section-title"><span class="title-deco">✦</span> 个人项目</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="project-icon">{{ project.icon }}</div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.desc }}</p>
          <div class="project-tech">
            <span v-for="(tech, i) in project.tech" :key="i">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--bg-primary);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  transition: var(--transition);
  cursor: default;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

.project-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.project-card h3 {
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.project-card p {
  color: var(--text-secondary);
  font-size: 0.93rem;
  margin-bottom: 16px;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.project-tech span {
  padding: 4px 12px;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.78rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
