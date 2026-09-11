import type { Writing } from '../types'

export const writings: Writing[] = [
  {
    id: 'vue-boundaries',
    title: {
      zh: '把 Vue 组件边界画小一点',
      en: 'Draw smaller boundaries around Vue components'
    },
    excerpt: {
      zh: '当一个组件同时管请求、表格和弹窗时，Composition API 救不了可读性。我用「一个文件只回答一个问题」拆了最近的后台页。',
      en: 'Composition API will not save a component that owns fetching, a table, and a dialog. I split a recent admin page so each file answers one question.'
    },
    date: '2026-08-12',
    category: { zh: '前端', en: 'Frontend' },
    readMinutes: 9,
    href: '#'
  },
  {
    id: 'ts-errors-as-docs',
    title: {
      zh: '把 TypeScript 报错当成文档来写',
      en: 'Treat TypeScript errors as documentation'
    },
    excerpt: {
      zh: '与其在 README 里再解释一遍约束，不如让错误信息自己说话。记录了 branded type 和自定义 type guard 的几处实践。',
      en: 'Instead of restating constraints in the README, let the compiler speak. Notes on branded types and custom type guards that actually helped.'
    },
    date: '2026-07-03',
    category: { zh: 'TypeScript', en: 'TypeScript' },
    readMinutes: 12,
    href: '#'
  },
  {
    id: 'less-tokens',
    title: {
      zh: 'Less 变量不该承担主题切换',
      en: 'Less variables should not own theme switching'
    },
    excerpt: {
      zh: '编译期常量和运行时 token 混在一起，暗色模式就会变成全文件覆盖。拆开之后，mixin 只负责布局，颜色全部走 CSS 变量。',
      en: 'Mixing compile-time constants with runtime tokens turns dark mode into file-wide overrides. Mixins keep layout; color lives in CSS variables.'
    },
    date: '2026-05-21',
    category: { zh: 'CSS', en: 'CSS' },
    readMinutes: 7,
    href: '#'
  },
  {
    id: 'local-first-notes',
    title: {
      zh: '本地优先笔记：同步是特性，不是前提',
      en: 'Local-first notes: sync is a feature, not a prerequisite'
    },
    excerpt: {
      zh: 'markfold 第一年没有账号系统。先把离线搜索和导出做稳，再考虑同步；这份备忘录写的是当时为什么敢砍掉登录。',
      en: 'markfold shipped a year without accounts. Offline search and export came first. This is why cutting login was a product decision, not a delay.'
    },
    date: '2026-04-08',
    category: { zh: '产品', en: 'Product' },
    readMinutes: 11,
    href: '#'
  },
  {
    id: 'cli-prompts',
    title: {
      zh: '脚手架问得越少，用的人越多',
      en: 'The fewer prompts a scaffolder asks, the more it gets used'
    },
    excerpt: {
      zh: 'draft-cli 曾经有 14 个问题。我把它收成 3 个，其余全部给可覆盖的默认值。这篇是删除过程中的判断标准。',
      en: 'draft-cli once asked 14 questions. It now asks 3, with overridable defaults for the rest. A log of what earned a prompt and what did not.'
    },
    date: '2026-02-16',
    category: { zh: '工程', en: 'Engineering' },
    readMinutes: 8,
    href: '#'
  },
  {
    id: 'year-review',
    title: {
      zh: '2025：少做新项目，把旧项目做完',
      en: '2025: fewer new repos, more finished ones'
    },
    excerpt: {
      zh: '这一年没有追逐新框架，把 vine-kit 的无障碍补齐，把三篇烂尾笔记写完。记录一份「完成比新鲜更重要」的年终账。',
      en: 'No new framework chase. Accessibility landed in vine-kit; three abandoned notes were finished. A year-end note that done beat novelty.'
    },
    date: '2025-12-30',
    category: { zh: '随笔', en: 'Essay' },
    readMinutes: 10,
    href: '#'
  }
]
