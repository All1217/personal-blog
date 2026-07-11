<template>
  <div id="blog">
    <NavBar />
    <router-view />
    <FooterBar />
    <BackToTop />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<style>
/* ===== 全局重置 & 基础变量 ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg: #ffffff;
  --text: #1a1a2e;
  --accent: #4FC08D;
  --accent-light: #6dd5a0;
  --gray: #f5f5f5;
  --gray-dark: #666;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  --radius: 16px;
  --max-width: 1100px;
  --transition: 0.3s ease;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans SC', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

/* ===== 通用区域样式 ===== */
section {
  padding: 100px 24px;
}

.section-container {
  max-width: var(--max-width);
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 48px;
  height: 4px;
  background: var(--accent);
  border-radius: 2px;
  margin: 12px auto 0;
}

.section-subtitle {
  text-align: center;
  color: var(--gray-dark);
  font-size: 1.05rem;
  margin-bottom: 60px;
}

/* ===== 通用卡片 ===== */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  background: var(--gray);
  border-radius: var(--radius);
  padding: 28px;
  transition: transform var(--transition), box-shadow var(--transition);
  cursor: default;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  section { padding: 64px 16px; }
  .section-title { font-size: 1.6rem; }
  .section-subtitle { margin-bottom: 40px; }
}
</style>
