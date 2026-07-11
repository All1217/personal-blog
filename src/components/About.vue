<script setup>
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title"><span class="title-deco">✦</span> 关于我</h2>
      <div class="about-card">
        <p>我是墨羽，一名独立开发者 & 写作者。热衷于探索前端技术的边界，也享受在深夜敲下每一行有温度的文字。</p>
        <p>目前专注于 Web 开发与开源项目，业余时间写写小说和随笔。</p>
        <div class="tags">
          <span class="tag">React</span>
          <span class="tag">TypeScript</span>
          <span class="tag">Node.js</span>
          <span class="tag">Tailwind</span>
          <span class="tag">写作</span>
          <span class="tag">摄影</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-card {
  background: var(--bg-alt);
  padding: 36px 40px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  max-width: 720px;
}

.about-card p {
  margin-bottom: 16px;
  color: var(--text-secondary);
  font-size: 1.05rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.tag {
  padding: 6px 16px;
  background: rgba(108, 92, 231, 0.08);
  color: var(--accent);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-card {
    padding: 24px;
  }
}
</style>
