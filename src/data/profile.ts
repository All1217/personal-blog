import type { Profile } from '../types'

export const profile: Profile = {
  name: { zh: '林默', en: 'Lin Mo' },
  role: {
    zh: '前端工程师 · 开源爱好者 · 长期写作者',
    en: 'Frontend engineer · Open source · Ongoing writer'
  },
  bio: {
    zh: '做产品界面，也做给开发者用的工具。关心类型安全、构建体验和能读下去的文档。白天写业务，晚上把重复劳动收成小库；文字用来把「当时为什么这么做」写清楚，避免三个月后自己也忘了。',
    en: 'I ship product UI and tools for other developers. I care about type safety, build experience, and docs people actually finish. Daytime is product work; nights turn repetition into small libraries. Writing is how I keep the “why” from evaporating in three months.'
  },
  location: { zh: '上海', en: 'Shanghai' },
  availability: { zh: '可远程协作 / 偶尔接咨询', en: 'Remote-friendly / occasional consulting' },
  skills: ['Vue 3', 'TypeScript', 'Vite', 'Node.js', 'CSS', 'Rust'],
  socials: [
    { id: 'github', label: { zh: 'GitHub', en: 'GitHub' }, href: 'https://github.com' },
    { id: 'juejin', label: { zh: '掘金', en: 'Juejin' }, href: 'https://juejin.cn' },
    { id: 'x', label: { zh: 'X', en: 'X' }, href: 'https://x.com' },
    { id: 'mail', label: { zh: '邮箱', en: 'Email' }, href: 'mailto:hello@example.com' }
  ],
  stats: [
    { value: '12', label: { zh: '公开仓库', en: 'Public repos' } },
    { value: '6', label: { zh: '年工程经验', en: 'Years building' } },
    { value: '40+', label: { zh: '篇技术笔记', en: 'Technical notes' } }
  ]
}
