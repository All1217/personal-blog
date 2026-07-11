<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'"
    :title="isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <!-- 太阳图标（亮色模式） -->
    <svg v-if="isDark" class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <!-- 月亮图标（暗色模式） -->
    <svg v-else class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

/**
 * 切换主题并持久化到 localStorage
 */
const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

// 初始化时从 DOM 同步状态
onMounted(() => {
  isDark.value = document.documentElement.getAttribute('data-theme') === 'dark'
})
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  bottom: 32px;
  right: 96px; /* BackToTop 在 right: 32px，这里错开 */
  width: 48px;
  height: 48px;
  background: var(--bg);
  color: var(--text-secondary);
  border: 2px solid var(--border);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: background var(--transition), color var(--transition), transform var(--transition), box-shadow var(--transition);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.theme-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.theme-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .theme-toggle {
    right: 88px;
    bottom: 28px;
  }
}
</style>
