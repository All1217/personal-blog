<template>
  <section id="about">
    <div class="section-container">
      <h2 class="section-title">关于我</h2>
      <p class="section-subtitle">About Me</p>

      <div class="about-content">
        <div class="about-text">
          <p>我是一名热爱技术的前端开发者，拥有多年 Web 开发经验。擅长使用 Vue.js、React 等现代框架构建高质量的用户界面。</p>
          <p>我相信好的产品源自对细节的追求和对用户的深刻理解。在工作之余，我喜欢摄影、写作和探索新技术。</p>
        </div>
        <div class="about-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-number">{{ stat.number }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { number: '5+', label: '年经验' },
  { number: '30+', label: '项目' },
  { number: '50+', label: '文章' },
  { number: '10+', label: '客户' }
]
</script>

<style scoped>
#about {
  background: var(--gray);
}

.about-content {
  display: flex;
  gap: 48px;
  align-items: center;
  flex-wrap: wrap;
}

.about-text {
  flex: 1;
  min-width: 280px;
}

.about-text p {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 16px;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  min-width: 240px;
}

.stat-item {
  background: white;
  border-radius: var(--radius);
  padding: 24px 20px;
  text-align: center;
  box-shadow: var(--shadow);
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: var(--gray-dark);
  margin-top: 4px;
}
</style>
