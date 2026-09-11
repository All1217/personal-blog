import { ref } from 'vue'
import type { Theme } from '../types'

const STORAGE_KEY = 'theme'
const theme = ref<Theme>('light')
let initialized = false

function applyTheme(next: Theme) {
  theme.value = next
  document.documentElement.setAttribute('data-theme', next)
}

function readPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function initTheme() {
  if (initialized) return
  applyTheme(readPreferredTheme())
  initialized = true
}

export function useTheme() {
  initTheme()

  const toggleTheme = () => {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return { theme, toggleTheme }
}
