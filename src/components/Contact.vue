<script setup>
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title"><span class="title-deco">✦</span> 联系我</h2>
      <div class="contact-content">
        <p>如果您有兴趣合作或只是想打个招呼，欢迎发邮件给我：</p>
        <a href="mailto:moyu@example.com" class="contact-email">moyu@example.com</a>
        <div class="social-links">
          <a href="#" class="social-link" title="GitHub">🐙 GitHub</a>
          <a href="#" class="social-link" title="微博">💬 微博</a>
          <a href="#" class="social-link" title="知乎">📘 知乎</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.contact-content p {
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 1.05rem;
}

.contact-email {
  display: inline-block;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  transition: var(--transition);
}

.contact-email:hover {
  border-bottom-color: var(--accent);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 28px;
}

.social-link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition);
  padding: 8px 16px;
  border-radius: 50px;
  background: var(--bg-alt);
  border: 1px solid var(--border);
}

.social-link:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
