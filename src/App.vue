<template>
  <div id="blog">
    <NavBar />
    <router-view />
    <FooterBar />
    <BackToTop />
    <ThemeToggle />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import BackToTop from './components/BackToTop.vue'
import ThemeToggle from './components/ThemeToggle.vue'

/**
 * 初始化主题：
 * 1. 先检查 localStorage 中的用户偏好
 * 2. 若没有，则跟随系统 prefers-color-scheme
 * 3. 设置 data-theme 属性到 <html> 上
 */
onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') {
    document.documentElement.setAttribute('data-theme', stored)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})
</script>

<style>
/* ===== 全局重置 ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== CSS 变量（亮色主题默认值） ===== */
:root {
  /* 核心背景与文字 */
  --bg: #ffffff;
  --bg-alt: #f8f9fa;
  --text: #1a1a2e;
  --text-secondary: #666;
  --text-heading: #222;
  --text-muted: #888;

  /* 强调色 */
  --accent: #4FC08D;
  --accent-dark: #3da87e;
  --accent-light: #e8f5e9;
  --accent-gradient: linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 100%);

  /* 边框 & 分割线 */
  --border: #e2e8f0;
  --border-light: #eee;

  /* 阴影 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.10);

  /* 圆角 */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  /* 布局 */
  --max-width: 1100px;
  --transition: 0.3s ease;

  /* NavBar */
  --navbar-bg: rgba(255, 255, 255, 0.85);
  --navbar-border: rgba(0, 0, 0, 0.06);

  /* Footer 深色区域 */
  --footer-bg: #1a1a2e;
  --footer-text: #ccc;
  --footer-link: #aaa;
  --footer-muted: #888;
  --footer-divider: rgba(255, 255, 255, 0.08);
}

/* ===== 暗色主题变量覆盖 ===== */
[data-theme="dark"] {
  --bg: #0f172a;
  --bg-alt: #1e293b;
  --text: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-heading: #f1f5f9;
  --text-muted: #64748b;

  --accent-light: #1a3a2a;

  --border: #334155;
  --border-light: #1e293b;

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.30);
  --shadow-md: 0 4px 20px rgba(0, 0, 0, 0.40);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.50);

  --navbar-bg: rgba(15, 23, 42, 0.85);
  --navbar-border: rgba(255, 255, 255, 0.06);

  --footer-bg: #020617;
  --footer-text: #94a3b8;
  --footer-link: #64748b;
  --footer-muted: #475569;
  --footer-divider: rgba(255, 255, 255, 0.05);
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
  /* 切换主题时颜色平滑过渡 */
  transition: background-color 0.3s ease, color 0.3s ease;
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
  color: var(--text-heading);
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
  color: var(--text-secondary);
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
  background: var(--bg-alt);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: transform var(--transition), box-shadow var(--transition);
  cursor: default;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
}

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  section { padding: 64px 16px; }
  .section-title { font-size: 1.6rem; }
  .section-subtitle { margin-bottom: 40px; }
}
</style>
