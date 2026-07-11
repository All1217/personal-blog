<template>
  <button v-show="backVisible" class="back-to-top" @click="scrollToTop" aria-label="回到顶部">
    ↑
  </button>
</template>

<script setup>
import { useScroll } from '../composables/useScroll.js'

// 复用同一个 composable，scroll 监听和节流已在内部统一处理
const { backVisible } = useScroll({ showBtnAt: 400 })

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.3rem;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(79, 192, 141, 0.35);
  transition: var(--transition);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  background: #3da87e;
  transform: translateY(-3px);
  box-shadow: 0 6px 24px rgba(79, 192, 141, 0.5);
}
</style>
