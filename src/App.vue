<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Writing from './components/Writing.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import FooterBar from './components/FooterBar.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <NavBar />
  <Hero />
  <About />
  <Projects />
  <Writing />
  <Gallery />
  <Contact />
  <FooterBar />
  <BackToTop />
</template>

<style>
/* ============================
   全局样式
   ============================ */
:root {
  --bg-primary: #faf9f8;
  --bg-alt: #ffffff;
  --text-primary: #1a1a2e;
  --text-secondary: #555770;
  --text-muted: #8e8ea0;
  --accent: #6c5ce7;
  --accent-light: #a29bfe;
  --accent-dark: #4834d4;
  --border: #e8e8ee;
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  --shadow-hover: 0 12px 40px rgba(0, 0, 0, 0.10);
  --radius: 16px;
  --radius-sm: 10px;
  --font-sans: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 90px 0;
}

.alt-bg {
  background: var(--bg-alt);
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.title-deco {
  color: var(--accent);
  font-size: 1.6rem;
}

.section-desc {
  color: var(--text-muted);
  margin-bottom: 40px;
  font-size: 1.05rem;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
}

.btn-primary:hover {
  background: var(--accent-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(108, 92, 231, 0.4);
}

.btn-outline {
  background: transparent;
  border-color: var(--accent);
  color: var(--accent);
}

.btn-outline:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.6rem;
  }
}
</style>
