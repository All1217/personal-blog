# 文字创作：文章与配图约定

本站不使用数据库或后端加载文章。每篇文章一个文件夹，中英文 Markdown 和配图放在一起，构建时由 Vite 收入站点。实现见 [`src/data/loadWritings.ts`](../src/data/loadWritings.ts)。

## 目录

| 内容 | 路径 | 浏览器访问 |
|------|------|------------|
| 索引（全部） | — | `/writing`，搜索 `?q=` |
| 索引（栏目） | — | `/writing/<栏目>` |
| 中文正文 | `content/writings/<栏目>/<slug>/zh.md` | `/writing/<栏目>/<slug>` |
| 英文正文 | `content/writings/<栏目>/<slug>/en.md`（可选） | 同一 URL，随站点语言切换 |
| 配图 | `content/writings/<栏目>/<slug>/` | 构建期生成的资源 URL |

`<slug>` 是文章文件夹名，也是 URL 最后一段。只认 `zh.md` / `en.md`，不再使用 `content/writings/<栏目>/<slug>.md` 这种平铺文件。

```
content/writings/
  notes/vue-boundaries/
    zh.md
    cover.svg
  anime/eva-still-works/
    zh.md
    still.svg
  career/college-metrics/
    zh.md
    en.md
    cover.webp
```

不要把 `.md` 放进 `public/`。未登记的栏目文件夹会被加载器忽略。

语言存在 `localStorage` 里，路由不带 `zh` / `en`。切换语言时标题、摘要、正文和目录一起换；没有英文稿时正文回退到中文。

## 栏目

栏目由**文件夹名**决定，且必须出现在 [`src/types/index.ts`](../src/types/index.ts) 的 `WRITING_CATEGORY_IDS` 中。

| 文件夹 | 中文 | 英文 i18n key |
|--------|------|----------------|
| `career` | 生涯规划 | `writing.career` |
| `notes` | 技术笔记 | `writing.notes` |
| `anime` | 动漫杂谈 | `writing.anime` |

新增栏目时三步都要做：

1. 建 `content/writings/<id>/`
2. 把 `<id>` 加入 `WRITING_CATEGORY_IDS`
3. 在 [`src/i18n/zh.ts`](../src/i18n/zh.ts) 与 [`src/i18n/en.ts`](../src/i18n/en.ts) 的 `writing` 下补翻译

## 一篇一夹

每个语言文件必须带 YAML frontmatter。至少一份语言文件要有 `title`，否则该文件夹不会出现在列表里。

只有中文正文、标题已双语时，写 `zh.md` 即可：

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

完整英文稿另存同目录的 `en.md`，用该语言的 `title` / `excerpt`，不必再写 `titleEn`。

加载器按 `(栏目, slug)` 把两份文件合成一条文章：

- `en.md` 缺省：`body.en` 回退到中文正文；英文标题/摘要用 `titleEn` / `excerptEn`，再缺省则沿用中文。
- `en.md` 存在：英文标题、摘要、正文以 `en.md` 为准。
- `date`、`cover` 以 `zh.md` 为准；只有英文时用 `en.md`。
- 阅读分钟数按各语言正文分别估算，也可用该文件的 `minutes` 覆盖。

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 至少一份语言文件需要 | 该语言标题；`zh.md` 里可用 `titleEn` 补英文标题 |
| `titleEn` | 否 | 仅 `zh.md`：没有 `en.md` 时的英文标题 |
| `excerpt` | 否 | 该语言列表摘要 |
| `excerptEn` | 否 | 仅 `zh.md`：没有 `en.md` 时的英文摘要 |
| `date` | 否 | `YYYY-MM-DD`，用于排序；缺省为 `1970-01-01` |
| `cover` | 否 | 同目录封面文件名，或绝对 URL |
| `minutes` | 否 | 该语言阅读分钟数；缺省按正文去空白字数 / 400 估算 |

frontmatter 只支持「一行一个 `key: value`」，不要写嵌套 YAML 或多行块。

列表按 `date` 从新到旧排列。首页只预览最新 4 篇并链到索引页。

## 配图

- 文件与 `zh.md` / `en.md` 放在同一篇文章文件夹里，可任意文件名（`.webp` / `.png` / `.jpg` / `.svg` 等）。
- 正文写相对路径：`![说明](./cover.webp)` 或 `![说明](cover.webp)`，加载时改成 Vite 打包后的资源地址。
- 已经是 `/...` 或 `http(s)://...` 的地址不会改写。
- `cover` 同样：写文件名即可，规则与相对路径图片相同。

一篇文章多张图时，都放在该篇文件夹里，不要共用别的 slug 文件夹。

## 搜索与筛选

独立索引页 `/writing`（及 `/writing/<栏目>`）会：

- 按栏目筛选（全部 + 已登记栏目，栏目走 path）
- 用 Fuse.js 模糊搜索当前筛选结果的标题、摘要、栏目名和**当前语言**正文（关键词走 `?q=`）

搜索在前端完成，不另建索引服务。单篇很长时，仍是整篇 Markdown 打进前端包；文章数量明显变多再考虑构建期索引。

## 检查清单

发一篇新文章前确认：

- [ ] 文件夹在 `content/writings/<已登记栏目>/<slug>/`
- [ ] 至少有 `zh.md` 或 `en.md`，且带 `title`
- [ ] 需要英文正文时另写 `en.md`
- [ ] 配图与 Markdown 在同一文件夹
- [ ] 正文图片用 `./文件名`，且文件确实存在
- [ ] 本地打开 `/writing/<栏目>/<slug>`，切语言后标题/正文符合预期
