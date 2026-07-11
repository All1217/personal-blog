<template>
  <section id="contact">
    <div class="section-container">
      <h2 class="section-title">联系我</h2>
      <p class="section-subtitle">Get in Touch</p>

      <div class="contact-content">
        <div class="contact-info">
          <div v-for="item in contactInfo" :key="item.label" class="contact-item">
            <span class="contact-icon">{{ item.icon }}</span>
            <div>
              <h4>{{ item.label }}</h4>
              <p>{{ item.value }}</p>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <input v-model="form.name" type="text" placeholder="你的名字" required class="form-input" />
            <input v-model="form.email" type="email" placeholder="你的邮箱" required class="form-input" />
          </div>
          <input v-model="form.subject" type="text" placeholder="主题" class="form-input" />
          <textarea v-model="form.message" placeholder="说点什么..." rows="5" required class="form-input"></textarea>
          <button type="submit" class="btn btn-primary form-btn">发送消息</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const contactInfo = [
  { icon: '📧', label: '邮箱', value: 'hello@example.com' },
  { icon: '📱', label: '微信', value: 'my_wechat_id' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/username' },
  { icon: '📖', label: '掘金', value: 'juejin.cn/user/...' }
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  alert(`感谢你的留言，${form.name}！我会尽快回复。`)
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<style scoped>
#contact {
  background: var(--gray);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 48px;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: white;
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.contact-icon {
  font-size: 1.5rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray);
  border-radius: 12px;
}

.contact-item h4 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.contact-item p {
  font-size: 0.88rem;
  color: var(--gray-dark);
}

.contact-form {
  background: white;
  padding: 32px;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.form-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.form-row .form-input {
  flex: 1;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 2px solid #eee;
  border-radius: 12px;
  font-size: 0.95rem;
  margin-bottom: 16px;
  transition: border-color var(--transition);
  font-family: inherit;
  outline: none;
}

.form-input:focus {
  border-color: var(--accent);
}

.form-btn {
  width: 100%;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  .form-row {
    flex-direction: column;
  }
}
</style>
