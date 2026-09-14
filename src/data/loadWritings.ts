import type { Locale, Localized, LocalizedNumber, Writing, WritingCategoryId } from '../types'
import { WRITING_CATEGORY_IDS } from '../types'

interface Frontmatter {
  title?: string
  titleEn?: string
  excerpt?: string
  excerptEn?: string
  date?: string
  cover?: string
  minutes?: string
}

interface LocaleDoc {
  data: Frontmatter
  content: string
}

interface WritingGroup {
  category: WritingCategoryId
  slug: string
  locales: Partial<Record<Locale, LocaleDoc>>
}

const markdownFiles = import.meta.glob('../../content/writings/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>

const imageFiles = import.meta.glob('../../content/writings/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  query: '?url',
  import: 'default',
  eager: true
}) as Record<string, string>

function parseFrontmatter(raw: string): { data: Frontmatter; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data: Frontmatter = {}
  for (const line of match[1].split(/\r?\n/)) {
    const index = line.indexOf(':')
    if (index === -1) continue
    const key = line.slice(0, index).trim() as keyof Frontmatter
    const value = line.slice(index + 1).trim().replace(/^["']|["']$/g, '')
    data[key] = value
  }

  return { data, content: match[2].trim() }
}

function isCategory(value: string): value is WritingCategoryId {
  return (WRITING_CATEGORY_IDS as readonly string[]).includes(value)
}

function isLocale(value: string): value is Locale {
  return value === 'zh' || value === 'en'
}

/** 只认 content/writings/<栏目>/<slug>/(zh|en).md */
function parsePath(path: string): { category: WritingCategoryId; slug: string; locale: Locale } | null {
  const match = path.replace(/\\/g, '/').match(/content\/writings\/([^/]+)\/([^/]+)\/(zh|en)\.md$/)
  if (!match) return null
  const [, category, slug, locale] = match
  if (!isCategory(category) || !isLocale(locale)) return null
  return { category, slug, locale }
}

function estimateMinutes(body: string, override?: string): number {
  if (override) {
    const parsed = Number(override)
    if (Number.isFinite(parsed) && parsed > 0) return Math.round(parsed)
  }
  const chars = body.replace(/\s/g, '').length
  return Math.max(1, Math.round(chars / 400))
}

function toPublicUrl(...segments: string[]): string {
  return `/${segments
    .flatMap((segment) => segment.replace(/\\/g, '/').split('/').filter(Boolean))
    .map((segment) => encodeURIComponent(segment))
    .join('/')}`
}

/** 在同目录配图 glob 里按栏目/slug/文件名取 Vite 生成的 URL */
function lookupAsset(category: string, slug: string, filename: string): string | undefined {
  const suffix = `content/writings/${category}/${slug}/${filename}`
  for (const [path, url] of Object.entries(imageFiles)) {
    if (path.replace(/\\/g, '/').endsWith(suffix)) return url
  }
  return undefined
}

/**
 * 把 Markdown 里的图片地址收成浏览器能访问的路径。
 * 同目录相对路径走 Vite 资源 URL；`/public/...` 相对路径收成站点根路径。
 */
export function resolveImageSrc(src: string, writing: { category: string; slug: string }): string {
  const trimmed = src.trim().replace(/\\/g, '/')
  if (!trimmed) return trimmed
  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('/')) return trimmed

  const publicIndex = trimmed.search(/(?:^|\/)public\//)
  if (publicIndex !== -1) {
    return toPublicUrl(trimmed.slice(publicIndex).replace(/^\/?public\//, ''))
  }

  const filename = trimmed.replace(/^\.\//, '')
  if (filename.startsWith('../')) return trimmed

  return lookupAsset(writing.category, writing.slug, filename) ?? trimmed
}

function resolveCover(category: WritingCategoryId, slug: string, cover?: string): string | undefined {
  if (!cover) return undefined
  return resolveImageSrc(cover, { category, slug })
}

function mergeGroup(group: WritingGroup): Writing | null {
  const zh = group.locales.zh
  const en = group.locales.en
  if (!zh?.data.title && !en?.data.title) return null

  const titleZh = zh?.data.title || en?.data.title || ''
  const titleEn = en?.data.title || zh?.data.titleEn || titleZh
  const excerptZh = zh?.data.excerpt || en?.data.excerpt || ''
  const excerptEn = en?.data.excerpt || zh?.data.excerptEn || excerptZh
  const bodyZh = zh?.content || en?.content || ''
  const bodyEn = en?.content || zh?.content || ''

  const title: Localized = { zh: titleZh, en: titleEn }
  const excerpt: Localized = { zh: excerptZh, en: excerptEn }
  const body: Localized = { zh: bodyZh, en: bodyEn }
  const readMinutes: LocalizedNumber = {
    zh: estimateMinutes(bodyZh, zh?.data.minutes ?? (zh ? undefined : en?.data.minutes)),
    en: estimateMinutes(bodyEn, en?.data.minutes ?? (en ? undefined : zh?.data.minutes))
  }

  return {
    slug: group.slug,
    category: group.category,
    title,
    excerpt,
    date: zh?.data.date || en?.data.date || '1970-01-01',
    readMinutes,
    cover: resolveCover(group.category, group.slug, zh?.data.cover || en?.data.cover),
    body
  }
}

function loadAllWritings(): Writing[] {
  const groups = new Map<string, WritingGroup>()

  for (const [path, raw] of Object.entries(markdownFiles)) {
    const parsedPath = parsePath(path)
    if (!parsedPath) continue

    const key = `${parsedPath.category}/${parsedPath.slug}`
    const group = groups.get(key) ?? {
      category: parsedPath.category,
      slug: parsedPath.slug,
      locales: {}
    }
    group.locales[parsedPath.locale] = parseFrontmatter(raw)
    groups.set(key, group)
  }

  const writings: Writing[] = []
  for (const group of groups.values()) {
    const writing = mergeGroup(group)
    if (writing) writings.push(writing)
  }

  return writings.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const writings = loadAllWritings()

export function getWriting(category: string, slug: string): Writing | undefined {
  return writings.find((item) => item.category === category && item.slug === slug)
}

export function writingPath(writing: Writing): string {
  return `/writing/${writing.category}/${writing.slug}`
}

export function rewriteMarkdownImages(body: string, writing: Writing): string {
  return body.replace(/!\[([^\]]*)\]\((?!https?:)([^)]+)\)/g, (_full, alt: string, src: string) => {
    return `![${alt}](${resolveImageSrc(src, writing)})`
  })
}
