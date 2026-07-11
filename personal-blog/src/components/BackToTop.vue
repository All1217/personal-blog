<template>
  <button v-show="visible" class="back-to-top" @click="scrollToTop" aria-label="回到顶部">
    ↑
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
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
