import type { Localized, Writing, WritingCategoryId } from '../types'
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

const files = import.meta.glob('../../content/writings/**/*.md', {
  query: '?raw',
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

function localized(zh: string, en?: string): Localized {
  return { zh, en: en || zh }
}

function isCategory(value: string): value is WritingCategoryId {
  return (WRITING_CATEGORY_IDS as readonly string[]).includes(value)
}

function parsePath(path: string): { category: WritingCategoryId; slug: string } | null {
  const match = path.replace(/\\/g, '/').match(/content\/writings\/([^/]+)\/([^/]+)\.md$/)
  if (!match) return null
  const [, category, slug] = match
  if (!isCategory(category)) return null
  return { category, slug }
}

function estimateMinutes(body: string, override?: string): number {
  if (override) {
    const parsed = Number(override)
    if (Number.isFinite(parsed) && parsed > 0) return Math.round(parsed)
  }
  const chars = body.replace(/\s/g, '').length
  return Math.max(1, Math.round(chars / 400))
}

function resolveCover(category: WritingCategoryId, slug: string, cover?: string): string | undefined {
  if (!cover) return undefined
  if (cover.startsWith('http') || cover.startsWith('/')) return cover
  return `/writings/${category}/${slug}/${cover.replace(/^\.\//, '')}`
}

function loadAllWritings(): Writing[] {
  const writings: Writing[] = []

  for (const [path, raw] of Object.entries(files)) {
    const parsedPath = parsePath(path)
    if (!parsedPath) continue

    const { data, content } = parseFrontmatter(raw)
    if (!data.title) continue

    writings.push({
      slug: parsedPath.slug,
      category: parsedPath.category,
      title: localized(data.title, data.titleEn),
      excerpt: localized(data.excerpt ?? '', data.excerptEn),
      date: data.date ?? '1970-01-01',
      readMinutes: estimateMinutes(content, data.minutes),
      cover: resolveCover(parsedPath.category, parsedPath.slug, data.cover),
      body: content
    })
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
  return body.replace(/!\[([^\]]*)\]\((?!https?:|\/)(?:\.\/)?([^)]+)\)/g, (_full, alt: string, src: string) => {
    return `![${alt}](/writings/${writing.category}/${writing.slug}/${src})`
  })
}
