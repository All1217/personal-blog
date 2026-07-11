<template>
  <section id="projects">
    <div class="section-container">
      <h2 class="section-title">个人项目</h2>
      <p class="section-subtitle">Projects</p>

      <div class="card-grid">
        <div v-for="project in projects" :key="project.title" class="card project-card">
          <div class="project-icon">{{ project.icon }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.desc }}</p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    icon: '🛒',
    title: '电商平台',
    desc: '全功能电商平台，支持商品展示、购物车、订单管理等模块。',
    tags: ['Vue 3', 'Pinia', 'Tailwind']
  },
  {
    icon: '📝',
    title: '博客系统',
    desc: 'Markdown 驱动的个人博客，支持标签分类、全文搜索。',
    tags: ['Nuxt', 'Content v2', 'Drizzle']
  },
  {
    icon: '🎨',
    title: '设计系统',
    desc: '可复用的 UI 组件库，包含 40+ 组件，支持主题定制。',
    tags: ['React', 'Storybook', 'TypeScript']
  },
  {
    icon: '📊',
    title: '数据仪表盘',
    desc: '实时数据可视化看板，支持多种图表类型和交互筛选。',
    tags: ['ECharts', 'Vue', 'WebSocket']
  }
]
</script>

<style scoped>
.project-card {
  text-align: center;
}

.project-icon {
  font-size: 2.4rem;
  margin-bottom: 16px;
}

.project-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.project-desc {
  color: var(--gray-dark);
  font-size: 0.92rem;
  margin-bottom: 16px;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.tag {
  display: inline-block;
  padding: 4px 12px;
  background: white;
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 500;
}
</style>
