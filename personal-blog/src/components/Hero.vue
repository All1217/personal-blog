<template>
  <section class="hero-section" id="hero">
    <div class="hero-container">
      <div class="hero-avatar">
        <span class="avatar-placeholder">👤</span>
      </div>
      <h1 class="hero-title">
        你好，我是 <span class="highlight">创作者</span>
      </h1>
      <p class="hero-desc">
        前端开发者 · 设计爱好者 · 终身学习者
      </p>
      <p class="hero-bio">
        热衷于用代码和设计创造美好的数字体验，记录成长路上的每一个脚印。
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">查看作品</a>
        <a href="#contact" class="btn btn-outline">联系我</a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%);
}

.hero-container {
  max-width: 680px;
}

.hero-avatar {
  margin-bottom: 32px;
}

.avatar-placeholder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 50%;
  font-size: 3rem;
  box-shadow: var(--shadow);
  border: 3px solid var(--accent-light);
}

.hero-title {
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
}

.highlight {
  color: var(--accent);
}

.hero-desc {
  font-size: 1.2rem;
  color: var(--gray-dark);
  margin-bottom: 12px;
}

.hero-bio {
  font-size: 1rem;
  color: #888;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #3da87e;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 192, 141, 0.35);
}

.btn-outline {
  background: transparent;
  color: var(--text);
  border: 2px solid #ddd;
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title { font-size: 2rem; }
  .hero-desc { font-size: 1.05rem; }
}
</style>
