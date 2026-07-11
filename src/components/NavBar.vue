<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="container nav-container">
      <a href="#" class="logo">✧ 墨羽</a>
      <nav class="nav-links" :class="{ open: menuOpen }">
        <a href="#about" class="nav-link" @click="closeMenu">关于</a>
        <a href="#projects" class="nav-link" @click="closeMenu">个人项目</a>
        <a href="#writing" class="nav-link" @click="closeMenu">文字创作</a>
        <a href="#gallery" class="nav-link" @click="closeMenu">光影集</a>
        <a href="#contact" class="nav-link" @click="closeMenu">联系</a>
      </nav>
      <button class="mobile-menu-btn" :class="{ active: menuOpen }" @click="toggleMenu" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(250, 249, 248, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  transition: var(--transition);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 0.95rem;
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: var(--transition);
}

.nav-link:hover {
  color: var(--accent);
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.mobile-menu-btn span {
  display: block;
  width: 26px;
  height: 2.5px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: var(--transition);
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(250, 249, 248, 0.97);
    backdrop-filter: blur(20px);
    flex-direction: column;
    gap: 0;
    padding: 16px 24px;
    border-bottom: 1px solid var(--border);
    transform: translateY(-120%);
    transition: var(--transition);
    opacity: 0;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
  }

  .nav-link {
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
