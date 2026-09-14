import MarkdownIt from 'markdown-it'
import type { Locale, Writing } from '../types'
import { rewriteMarkdownImages } from '../data/loadWritings'

export interface TocItem {
  id: string
  level: number
  text: string
}

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
  typographer: true
})

/** 给引用块加上 class，便于 prose 样式挂钩 */
md.renderer.rules.blockquote_open = (tokens, idx, options, _env, self) => {
  tokens[idx].attrJoin('class', 'md-quote')
  return self.renderToken(tokens, idx, options)
}

/** 外链在新标签打开，避免离开阅读页 */
md.renderer.rules.link_open = (tokens, idx, options, _env, self) => {
  const href = String(tokens[idx].attrGet('href') || '')
  if (/^https?:\/\//i.test(href)) {
    tokens[idx].attrSet('target', '_blank')
    tokens[idx].attrSet('rel', 'noopener noreferrer')
  }
  return self.renderToken(tokens, idx, options)
}

/** 去掉标题里的加粗等标记，只留目录可读文本 */
function stripInlineMarkup(text: string): string {
  return text.replace(/\*\*|__/g, '').replace(/\*/g, '').trim()
}

/** 解析当前语言的正文：写入标题 id，并抽出 h1–h3 目录 */
export function renderWriting(writing: Writing, locale: Locale): { html: string; toc: TocItem[] } {
  const source = rewriteMarkdownImages(writing.body[locale], writing)
  const tokens = md.parse(source, {})
  const toc: TocItem[] = []
  let index = 0

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (token.type !== 'heading_open') continue

    const level = Number(token.tag.slice(1))
    if (level < 1 || level > 3) continue

    const text = stripInlineMarkup(tokens[i + 1]?.content ?? '')
    if (!text) continue

    index += 1
    const id = `heading-${index}`
    token.attrSet('id', id)
    toc.push({ id, level, text })
  }

  return {
    html: md.renderer.render(tokens, md.options, {}),
    toc
  }
}

/** 只要 HTML 的兼容入口 */
export function renderWritingHtml(writing: Writing, locale: Locale): string {
  return renderWriting(writing, locale).html
}
