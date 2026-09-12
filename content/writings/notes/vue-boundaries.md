---
title: 把 Vue 组件边界画小一点
titleEn: Draw smaller boundaries around Vue components
excerpt: 当一个组件同时管请求、表格和弹窗时，Composition API 救不了可读性。我用「一个文件只回答一个问题」拆了最近的后台页。
excerptEn: Composition API will not save a component that owns fetching, a table, and a dialog. I split a recent admin page so each file answers one question.
date: 2026-08-12
cover: cover.svg
---

当一个页面里的 `.vue` 文件同时负责拉数、筛选项、表格和确认弹窗时，再把逻辑挪进 `setup` 也只是换了个地方堆。

## 一个文件只回答一个问题

拆法很土：请求进 composable，表格进展示组件，弹窗自己管开关。父页面只负责把它们拼起来。

![组件边界示意](./cover.svg)

边界清楚之后，改筛选条件不会再误伤提交逻辑。Composition API 适合复用，不适合当「把所有事塞进一个 setup」的许可证。
