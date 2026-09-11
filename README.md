# Personal Blog

一个基于 **Vite + Vue 3 + TypeScript + Less** 的个人博客。当前是单页首页：简介、开源项目、文字创作，支持明暗主题与中英文切换。

## 技术栈

| 技术 | 说明 |
|------|------|
| Vue 3 | Composition API + `<script setup lang="ts">` |
| Vite | 开发与构建 |
| TypeScript | `vue-tsc` 类型检查 |
| Less | 嵌套、mixin、CSS 变量主题 |

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认 http://localhost:5100 。

```bash
npm run build
```

## 扩展新板块

1. 在 `src/sections/` 新增 `XxxSection.vue`（可复用 `SectionBlock`）
2. 在 [`src/sections/registry.ts`](src/sections/registry.ts) 追加一条 `blogSections` 记录（`id` / `order` / `enabled` / i18n key / 组件）
3. 在 `src/i18n/zh.ts` 与 `src/i18n/en.ts` 补标题和副标题

顶栏锚点导航会按 registry 自动生成。

## 目录

```
src/
  App.vue
  views/HomePage.vue
  sections/registry.ts
  sections/OpenSourceSection.vue
  sections/WritingSection.vue
  components/
  data/profile.ts
  data/projects.ts
  data/writings.ts
  composables/useTheme.ts
  composables/useI18n.ts
  i18n/zh.ts
  i18n/en.ts
  styles/
```

主题与语言偏好分别写入 `localStorage` 的 `theme`、`locale`。
