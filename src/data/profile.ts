import type { Profile } from '../types'

export const profile: Profile = {
  name: { zh: 'All1217', en: 'All1217' },
  role: {
    zh: '全栈工程师 · 开源爱好者 · 长期写作者',
    en: 'Full-Stack engineer · Open source · Ongoing writer'
  },
  bio: {
    zh: '在职全栈工程师，但还是更偏重后端。长期运营开源项目；有长期写作计划，更新可能比较慢。',
    en: 'A full-stack engineer currently employed, but still more focused on backend development. Long-term experience in maintaining open-source projects; has a long-term writing plan.'
  },
  location: { zh: '地球', en: 'Earth' },
  availability: { zh: '前端 / 后端 / 大模型应用开发（学习中）', en: 'Frontend / Backend / Large Model Application Development (In Learning)' },
  skills: ['Vue 3', 'Java', 'Spring Boot', 'Spring AI', 'PostgreSQL', 'MySQL'],
  socials: [
    { id: 'github', label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com/All1217' },
    { id: 'Gmail', label: { zh: 'kyukki448@gmail.com', en: 'kyukki448@gmail.com' }, href: 'kyukki448@gmail.com' },
    { id: 'QQmail', label: { zh: '2231369037@qq.com', en: '2231369037@qq.com' }, href: '2231369037@qq.com' }
  ],
  stats: [
    { value: '5', label: { zh: '公开仓库', en: 'Public repos' } },
    { value: '0.5', label: { zh: '年工程经验', en: 'Years building' } },
    { value: '0', label: { zh: '篇技术笔记', en: 'Technical notes' } }
  ]
}
