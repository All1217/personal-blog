<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    class="back-to-top"
    :class="{ visible }"
    @click="scrollToTop"
    aria-label="回到顶部"
  >
    ↑
  </button>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--accent);
  color: #fff;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
  transition: var(--transition);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  z-index: 99;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--accent-dark);
  transform: translateY(-3px);
}
</style>
