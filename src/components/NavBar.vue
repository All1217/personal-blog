<template>
  <header class="navbar" :class="{ scrolled: scrolled }">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">Personal Blog</router-link>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="切换菜单">
        <span></span><span></span><span></span>
      </button>
      <nav :class="['nav-menu', { open: menuOpen }]">
        <router-link
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const menuItems = [
  { to: '/', label: '首页' },
  { to: '/#about', label: '关于' },
  { to: '/#projects', label: '项目' },
  { to: '/#writing', label: '文字' },
  { to: '/#gallery', label: '光影' },
  { to: '/#contact', label: '联系' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: var(--transition);
}

.navbar.scrolled {
  border-bottom-color: rgba(0, 0, 0, 0.06);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-link {
  text-decoration: none;
  color: var(--text);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: var(--transition);
}

.nav-link:hover {
  background: var(--gray);
  color: var(--accent);
}

/* 当前路由高亮 */
.nav-link.router-link-exact-active {
  color: var(--accent);
  font-weight: 600;
}

/* 汉堡菜单按钮 */
.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}

@media (max-width: 768px) {
  .nav-toggle { display: flex; }

  .nav-menu {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    padding: 16px 24px;
    gap: 4px;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  .nav-menu.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    padding: 12px 16px;
    font-size: 1.05rem;
  }
}
</style>
