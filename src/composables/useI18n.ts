import { computed, ref } from 'vue'
import type { Locale, Localized } from '../types'
import { zh } from '../i18n/zh'
import { en } from '../i18n/en'

type MessageTree = { [key: string]: string | MessageTree }

const STORAGE_KEY = 'locale'
const messages: Record<Locale, MessageTree> = { zh, en }
const locale = ref<Locale>('zh')
let initialized = false

function lookup(tree: MessageTree, path: string): string {
  const parts = path.split('.')
  let current: string | MessageTree = tree
  for (const part of parts) {
    if (typeof current !== 'object' || current === null || !(part in current)) {
      return path
    }
    current = current[part]
  }
  return typeof current === 'string' ? current : path
}

function applyLocale(next: Locale) {
  locale.value = next
  document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en'
  document.title = lookup(messages[next], 'site.title')
}

function readPreferredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'zh' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function initLocale() {
  if (initialized) return
  applyLocale(readPreferredLocale())
  initialized = true
}

export function useI18n() {
  initLocale()

  const t = (key: string) => lookup(messages[locale.value], key)
  const tx = (text: Localized) => text[locale.value]

  const otherLocale = computed<Locale>(() => (locale.value === 'zh' ? 'en' : 'zh'))

  const toggleLocale = () => {
    const next = otherLocale.value
    applyLocale(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return { locale, otherLocale, t, tx, toggleLocale }
}
