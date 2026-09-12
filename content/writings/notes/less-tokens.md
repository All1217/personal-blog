---
title: Less 变量不该承担主题切换
titleEn: Less variables should not own theme switching
excerpt: 编译期常量和运行时 token 混在一起，暗色模式就会变成全文件覆盖。拆开之后，mixin 只负责布局，颜色全部走 CSS 变量。
excerptEn: Mixing compile-time constants with runtime tokens turns dark mode into file-wide overrides. Mixins keep layout; color lives in CSS variables.
date: 2026-05-21
---

Less 变量在构建时就被写死。用户点一下「暗色」时，编译器已经下班了。

## 两套东西各管各的

- `@breakpoint-mobile`、间距 mixin：编译期，Less 足够
- `--bg`、`--text`、`--accent`：运行时，放在 `[data-theme]` 上

主题切换只覆盖 CSS 变量，不要为暗色再复制一份组件样式。
