<script setup>
import { ref } from 'vue'

const galleryItems = ref([
  { icon: '🌅', label: '落日', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { icon: '🌸', label: '花', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)' },
  { icon: '🌊', label: '海', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
  { icon: '🌲', label: '林', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
  { icon: '☕', label: '午后', gradient: 'linear-gradient(135deg, #fa709a, #fee140)' },
  { icon: '🌙', label: '月夜', gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)' }
])
</script>

<template>
  <section id="gallery" class="section alt-bg">
    <div class="container">
      <h2 class="section-title"><span class="title-deco">✦</span> 光影集</h2>
      <p class="section-desc">一些随手拍下的瞬间</p>
      <div class="gallery-grid">
        <div
          v-for="(item, index) in galleryItems"
          :key="index"
          class="gallery-item"
          :style="{ background: item.gradient }"
        >
          {{ item.icon }} {{ item.label }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.gallery-item {
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: var(--transition);
  cursor: pointer;
}

.gallery-item:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-hover);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
