<script setup>
</script>

<template>
  <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1 class="hero-title">你好，我是<span class="highlight">墨羽</span></h1>
        <p class="hero-subtitle">一名热爱技术与文字的全栈开发者</p>
        <p class="hero-desc">用代码构建世界，用文字记录思考。</p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">查看项目</a>
          <a href="#writing" class="btn btn-outline">阅读文章</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="avatar-box">
          <div class="avatar-placeholder">✧</div>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">↓</div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -20%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(108, 92, 231, 0.08) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}

.hero-text {
  flex: 1;
  min-width: 300px;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero-title .highlight {
  background: linear-gradient(135deg, var(--accent), var(--accent-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.hero-desc {
  color: var(--text-muted);
  font-size: 1rem;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-visual {
  flex-shrink: 0;
}

.avatar-box {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-light), var(--accent));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 60px rgba(108, 92, 231, 0.2);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

.avatar-placeholder {
  font-size: 4rem;
  color: #fff;
  opacity: 0.9;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: var(--text-muted);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(8px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-content {
    flex-direction: column-reverse;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .avatar-box {
    width: 140px;
    height: 140px;
  }

  .avatar-placeholder {
    font-size: 3rem;
  }
}
</style>
