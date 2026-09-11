import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'vine-kit',
    name: 'vine-kit',
    description: {
      zh: '面向 Vue 3 的轻量组件与组合函数合集：表格密度、命令面板、无障碍焦点管理，强调可复制而非「再造一个 UI 库」。',
      en: 'A slim Vue 3 kit of components and composables — dense tables, command palette, focus management — meant to be copied, not another full UI library.'
    },
    tags: ['Vue 3', 'TypeScript', 'A11y'],
    repo: 'https://github.com',
    language: 'TS',
    stars: '1.2k',
    status: { zh: '维护中', en: 'Active' }
  },
  {
    id: 'markfold',
    name: 'markfold',
    description: {
      zh: '本地优先的 Markdown 知识库：文件夹即分类，全文搜索走 SQLite FTS，导出静态站点只需一条命令。',
      en: 'Local-first Markdown knowledge base. Folders are categories, search is SQLite FTS, and a static site is one command away.'
    },
    tags: ['Node', 'SQLite', 'Markdown'],
    repo: 'https://github.com',
    language: 'TS',
    stars: '860',
    status: { zh: '维护中', en: 'Active' }
  },
  {
    id: 'draft-cli',
    name: 'draft-cli',
    description: {
      zh: '个人脚手架：一键拉起 Vite + TS + Less 项目，内置 ESLint 平面配置、提交钩子和我常用的目录约定。',
      en: 'Personal scaffolder for Vite + TS + Less apps, with flat ESLint, git hooks, and the folder conventions I actually use.'
    },
    tags: ['CLI', 'Vite', 'DX'],
    repo: 'https://github.com',
    language: 'TS',
    stars: '340',
    status: { zh: '稳定', en: 'Stable' }
  },
  {
    id: 'chroma-tokens',
    name: 'chroma-tokens',
    description: {
      zh: '从一份 token JSON 生成 CSS 变量、Less 映射和暗色覆盖。支持对比度检查，避免「看起来可以、测起来不行」。',
      en: 'One token JSON in; CSS variables, Less maps, and dark overrides out. Contrast checks so palettes that look fine actually pass.'
    },
    tags: ['Design tokens', 'Less', 'CSS'],
    repo: 'https://github.com',
    language: 'TS',
    stars: '210',
    status: { zh: '实验', en: 'Experimental' }
  },
  {
    id: 'query-lite',
    name: 'query-lite',
    description: {
      zh: '不到 3KB 的请求缓存层：stale-while-revalidate、去重、失败重试。没有 Devtools 面板，只有你能读完的源码。',
      en: 'A <3KB fetch cache: stale-while-revalidate, deduping, retries. No DevTools panel — just source you can finish in an afternoon.'
    },
    tags: ['TypeScript', 'HTTP', 'Cache'],
    repo: 'https://github.com',
    language: 'TS',
    stars: '540',
    status: { zh: '维护中', en: 'Active' }
  },
  {
    id: 'edge-md',
    name: 'edge-md',
    description: {
      zh: '跑在边缘运行时的 Markdown 渲染器：流式输出、语法高亮按需加载，专门给文档站首字节优化。',
      en: 'Markdown renderer for edge runtimes: streaming HTML, lazy syntax highlighting, tuned for documentation TTFB.'
    },
    tags: ['Edge', 'Markdown', 'Perf'],
    repo: 'https://github.com',
    language: 'Rust',
    stars: '190',
    status: { zh: '早期', en: 'Early' }
  }
]
