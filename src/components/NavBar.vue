<template>
  <header class="navbar" :class="{ scrolled: scrolled }">
    <div class="nav-container">
      <router-link to="/" class="nav-logo">Personal Blog</router-link>
      <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="切换菜单">
        <span></span><span></span><span></span>
      </button>
      <nav :class="['nav-menu', { open: menuOpen }]">
        <a
          v-for="item in menuItems"
          :key="item.id"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="handleNav(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useScroll } from '../composables/useScroll.js'

const router = useRouter()
const route = useRoute()

const menuOpen = ref(false)

// 通过 composable 获取滚动状态（已含 rAF 节流）
const { scrolled } = useScroll({ threshold: 50 })

// 当前激活的锚点（用于高亮）
const activeSection = ref('')

const menuItems = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '项目' },
  { id: 'writing', label: '文字' },
  { id: 'gallery', label: '光影' },
  { id: 'contact', label: '联系' }
]

/**
 * 处理导航点击：
 * - "首页"：跳转到路由 / 并滚动到顶部
 * - 其他锚点：先确保在首页路由，再用 scrollIntoView 平滑滚动到对应 section
 */
const handleNav = (id) => {
  menuOpen.value = false

  if (id === 'home') {
    // 如果不在首页，先跳转；如果在首页，直接滚动到顶部
    if (route.path !== '/') {
      router.push('/').then(() => scrollToTop())
    } else {
      scrollToTop()
    }
    return
  }

  // 锚点导航：如果不在首页，先跳转到首页再滚动
  const scrollToSection = () => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      activeSection.value = id
    }
  }

  if (route.path !== '/') {
    router.push('/').then(() => {
      // 等待 DOM 渲染完成后滚动
      setTimeout(scrollToSection, 50)
    })
  } else {
    scrollToSection()
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  activeSection.value = ''
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--navbar-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: var(--transition);
}

.navbar.scrolled {
  border-bottom-color: var(--navbar-border);
  box-shadow: var(--shadow-sm);
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
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  transition: var(--transition);
  cursor: pointer;
}

.nav-link:hover {
  background: var(--bg-alt);
  color: var(--accent);
}

/* 当前激活的锚点高亮 */
.nav-link.active {
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
    background: var(--navbar-bg);
    backdrop-filter: blur(12px);
    flex-direction: column;
    padding: 16px 24px;
    gap: 4px;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: var(--transition);
    border-bottom: 1px solid var(--navbar-border);
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
