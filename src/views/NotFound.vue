<template>
  <div class="not-found-page">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-title">页面未找到</h2>
      <p class="error-desc">抱歉，您访问的页面不存在或已被移除。</p>
      <router-link to="/" class="back-home">返回首页</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg, #ffffff);
  padding: 24px;
}

.not-found-content {
  text-align: center;
  max-width: 480px;
}

.error-code {
  font-size: 6rem;
  font-weight: 800;
  color: var(--accent, #4FC08D);
  line-height: 1;
  margin-bottom: 16px;
  opacity: 0.8;
}

.error-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text, #1a1a2e);
  margin-bottom: 12px;
}

.error-desc {
  color: var(--gray-dark, #666);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 32px;
}

.back-home {
  display: inline-block;
  padding: 12px 32px;
  background: var(--accent, #4FC08D);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: opacity 0.3s, transform 0.3s;
}

.back-home:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .error-code {
    font-size: 4.5rem;
  }
  .error-title {
    font-size: 1.4rem;
  }
}
</style>
