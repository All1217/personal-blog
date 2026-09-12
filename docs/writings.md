# 文字创作：文章与配图约定

本站不使用数据库或后端加载文章。Markdown 和配图都放在仓库里，构建时由 Vite 收入站点。实现见 [`src/data/loadWritings.ts`](../src/data/loadWritings.ts)。

## 目录

| 内容 | 路径 | 浏览器访问 |
|------|------|------------|
| 索引（全部） | — | `/writing`，搜索 `?q=` |
| 索引（栏目） | — | `/writing/<栏目>` |
| 正文 | `content/writings/<栏目>/<slug>.md` | `/writing/<栏目>/<slug>` |
| 配图 | `public/writings/<栏目>/<slug>/` | 静态资源 `/writings/<栏目>/<slug>/<文件名>` |

`<slug>` 是文件名（不含 `.md`），也是 URL 最后一段。同一篇文章的正文和配图必须使用相同的 `<栏目>` 与 `<slug>`。

```
content/writings/
  career/year-review.md
  notes/vue-boundaries.md
  anime/eva-still-works.md

public/writings/
  notes/vue-boundaries/cover.svg
  anime/eva-still-works/still.svg
```

不要把 `.md` 放进 `public/`，也不要把配图放进 `content/`。未登记的栏目文件夹会被加载器忽略。

## 栏目

栏目由**文件夹名**决定，且必须出现在 [`src/types/index.ts`](../src/types/index.ts) 的 `WRITING_CATEGORY_IDS` 中。

| 文件夹 | 中文 | 英文 i18n key |
|--------|------|----------------|
| `career` | 生涯规划 | `writing.career` |
| `notes` | 技术笔记 | `writing.notes` |
| `anime` | 动漫杂谈 | `writing.anime` |

新增栏目时四步都要做：

1. 建 `content/writings/<id>/`
2. 按需建 `public/writings/<id>/`
3. 把 `<id>` 加入 `WRITING_CATEGORY_IDS`
4. 在 [`src/i18n/zh.ts`](../src/i18n/zh.ts) 与 [`src/i18n/en.ts`](../src/i18n/en.ts) 的 `writing` 下补翻译

## 文章文件

每个 `.md` 必须带 YAML frontmatter，`title` 不能缺，否则该文件不会出现在列表里。

```md
---
title: 中文标题
titleEn: English title
excerpt: 中文摘要
excerptEn: English excerpt
date: 2026-08-12
cover: cover.webp
minutes: 8
---

正文从这里开始。

![说明](./cover.webp)
```

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 是 | 中文标题 |
| `titleEn` | 否 | 英文标题；缺省时沿用 `title` |
| `excerpt` | 否 | 列表摘要 |
| `excerptEn` | 否 | 英文摘要；缺省时沿用 `excerpt` |
| `date` | 否 | `YYYY-MM-DD`，用于排序；缺省为 `1970-01-01` |
| `cover` | 否 | 封面文件名或绝对 URL |
| `minutes` | 否 | 阅读分钟数；缺省按正文去空白字数 / 400 估算 |

frontmatter 只支持「一行一个 `key: value`」，不要写嵌套 YAML 或多行块。

列表按 `date` 从新到旧排列。首页只预览最新 4 篇并链到索引页。

## 配图

- 文件放在 `public/writings/<栏目>/<slug>/` 下，可任意文件名（`.webp` / `.png` / `.jpg` / `.svg` 等）。
- 正文里优先写相对路径：`![说明](./cover.webp)` 或 `![说明](cover.webp)`，加载时会改写成 `/writings/<栏目>/<slug>/cover.webp`。
- 已经是 `/...` 或 `http(s)://...` 的地址不会改写。
- `cover` 同样：写文件名即可，规则与相对路径图片相同。

一篇文章多张图时，都放在该篇的 `public/writings/<栏目>/<slug>/` 目录里，不要共用别的 slug 文件夹。

## 搜索与筛选

独立索引页 `/writing`（及 `/writing/<栏目>`）会：

- 按栏目筛选（全部 + 已登记栏目，栏目走 path）
- 用 Fuse.js 模糊搜索当前筛选结果的标题、摘要、栏目名和正文（关键词走 `?q=`）

搜索在前端完成，不另建索引服务。单篇很长时，仍是整篇 Markdown 打进前端包；文章数量明显变多再考虑构建期索引。

## 检查清单

发一篇新文章前确认：

- [ ] 文件在 `content/writings/<已登记栏目>/<slug>.md`
- [ ] frontmatter 有 `title` 和 `date`
- [ ] 配图在 `public/writings/<同一栏目>/<同一 slug>/`
- [ ] 正文图片用 `./文件名`，且文件确实存在
- [ ] 本地打开 `/writing/<栏目>/<slug>` 能看到正文和图片
