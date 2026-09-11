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

export interface Writing {
  id: string
  title: Localized
  excerpt: Localized
  date: string
  category: Localized
  readMinutes: number
  href?: string
}

export interface BlogSection {
  id: string
  order: number
  enabled: boolean
  i18nKey: string
  subtitleKey: string
  component: Component
}
