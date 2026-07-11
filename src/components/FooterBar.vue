<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <h3>Personal Blog</h3>
        <p>记录成长，分享热爱</p>
      </div>
      <div class="footer-links">
        <a v-for="link in links" :key="link.label" :href="link.href" class="footer-link">{{ link.label }}</a>
      </div>
      <div class="footer-social">
        <a v-for="s in social" :key="s.label" :href="s.href" class="social-link" :title="s.label">{{ s.icon }}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ year }} Personal Blog. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const links = [
  { label: '关于', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '文字', href: '#writing' },
  { label: '联系', href: '#contact' }
]

const social = [
  { label: 'GitHub', icon: '🐙', href: '#' },
  { label: '微博', icon: '📱', href: '#' },
  { label: '掘金', icon: '📖', href: '#' }
]
</script>

<style scoped>
.footer {
  background: var(--footer-bg);
  color: var(--footer-text);
  padding: 60px 24px 0;
}

.footer-container {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--footer-divider);
}

.footer-brand h3 {
  color: var(--bg);
  font-size: 1.3rem;
  margin-bottom: 6px;
}

.footer-brand p {
  font-size: 0.9rem;
  color: var(--footer-muted);
}

.footer-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-link {
  color: var(--footer-link);
  text-decoration: none;
  font-size: 0.92rem;
  transition: color var(--transition);
}

.footer-link:hover {
  color: var(--accent);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-link {
  text-decoration: none;
  font-size: 1.4rem;
  transition: transform var(--transition);
}

.social-link:hover {
  transform: translateY(-3px);
}

.footer-bottom {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
  padding: 20px 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
}
</style>
