import type { Component } from 'vue'

export type Theme = 'light' | 'dark'
export type Locale = 'zh' | 'en'

export interface Localized {
  zh: string
  en: string
}

export interface SocialLink {
  id: string
  label: Localized
  href: string
}

export interface ProfileStat {
  value: string
  label: Localized
}

export interface Profile {
  name: Localized
  role: Localized
  bio: Localized
  location: Localized
  availability: Localized
  skills: string[]
  socials: SocialLink[]
  stats: ProfileStat[]
}

export interface Project {
  id: string
  name: string
  description: Localized
  tags: string[]
  repo: string
  language: string
  stars: string
  status: Localized
}

export const WRITING_CATEGORY_IDS = ['career', 'notes', 'anime'] as const
export type WritingCategoryId = (typeof WRITING_CATEGORY_IDS)[number]

/** 判断路径参数是否为已登记栏目 */
export function isWritingCategory(value: string): value is WritingCategoryId {
  return (WRITING_CATEGORY_IDS as readonly string[]).includes(value)
}

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface Writing {
  slug: string
  category: WritingCategoryId
  title: Localized
  excerpt: Localized
  date: string
  readMinutes: number
  cover?: string
  body: string
}

export interface BlogSection {
  id: string
  order: number
  enabled: boolean
  i18nKey: string
  subtitleKey: string
  component: Component
  /** 独立页面路径；缺省则顶栏跳首页锚点 */
  href?: string
}
