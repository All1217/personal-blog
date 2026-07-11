<template>
  <section id="gallery">
    <div class="section-container">
      <h2 class="section-title">光影集</h2>
      <p class="section-subtitle">Gallery</p>

      <div class="gallery-grid">
        <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item">
          <div class="gallery-card">
            <div class="gallery-placeholder">
              <span class="gallery-emoji">{{ item.emoji }}</span>
            </div>
            <div class="gallery-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryItems = [
  { emoji: '🌄', title: '日落时分', desc: '城市天际线的金色时刻' },
  { emoji: '🌊', title: '海岸线', desc: '海浪与岩石的交响曲' },
  { emoji: '🌲', title: '森林深处', desc: '光影斑驳的林间小径' },
  { emoji: '🏛️', title: '建筑美学', desc: '几何与光影的对话' },
  { emoji: '🌸', title: '花与季节', desc: '四季变换的色彩记录' },
  { emoji: '🌃', title: '夜景城市', desc: '霓虹灯光下的都市' }
]
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.gallery-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--bg);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition);
  cursor: default;
}

.gallery-card:hover {
  transform: translateY(-6px);
}

.gallery-placeholder {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-gradient);
}

.gallery-emoji {
  font-size: 4rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.gallery-info {
  padding: 20px;
}

.gallery-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--text-heading);
}

.gallery-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}
</style>
