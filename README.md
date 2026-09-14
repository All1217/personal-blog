# Personal Blog

一个基于 **Vite + Vue 3 + TypeScript + Less** 的个人博客。首页是简介、开源项目和文字预览；完整文字列表在 `/writing`，支持栏目筛选和模糊搜索。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认 http://localhost:5100 。

```bash
npm run build
```

## 文章和配图

约定见 [docs/writings.md](docs/writings.md)。每篇文章一个文件夹：`zh.md` / 可选的 `en.md` 和配图放在 `content/writings/<栏目>/<slug>/`。

## 扩展新板块

1. 在 `src/sections/` 新增 Section 组件
2. 在 [`src/sections/registry.ts`](src/sections/registry.ts) 登记
3. 补中英标题

## 目录

```
content/writings/     # 一篇一夹：zh.md / en.md 与配图
src/
  data/loadWritings.ts
  views/WritingIndex.vue
  views/WritingView.vue
  ...
```
