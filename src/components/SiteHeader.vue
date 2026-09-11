<template>
  <header class="site-header">
    <div class="page-wrap site-header__inner">
      <a class="brand" href="#intro">{{ t('site.name') }}</a>

      <nav class="nav" aria-label="primary">
        <a href="#intro">{{ t('nav.intro') }}</a>
        <a v-for="section in sections" :key="section.id" :href="`#${section.id}`">
          {{ t(section.i18nKey) }}
        </a>
      </nav>

      <div class="toggles">
        <button
          type="button"
          class="icon-btn"
          :aria-label="locale === 'zh' ? t('actions.localeToEn') : t('actions.localeToZh')"
          :title="locale === 'zh' ? t('actions.localeToEn') : t('actions.localeToZh')"
          @click="toggleLocale"
        >
          {{ locale === 'zh' ? 'EN' : '中' }}
        </button>
        <button
          type="button"
          class="icon-btn"
          :aria-label="theme === 'dark' ? t('actions.themeToLight') : t('actions.themeToDark')"
          :title="theme === 'dark' ? t('actions.themeToLight') : t('actions.themeToDark')"
          @click="toggleTheme"
        >
          <svg v-if="theme === 'dark'" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { getEnabledSections } from '../sections/registry'
import { useI18n } from '../composables/useI18n'
import { useTheme } from '../composables/useTheme'

const { t, locale, toggleLocale } = useI18n()
const { theme, toggleTheme } = useTheme()
const sections = getEnabledSections()
</script>

<style scoped lang="less">
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  height: var(--header-height);
  background: var(--bg);
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    gap: 16px;
    height: var(--header-height);
  }
}

.brand {
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  color: var(--text-heading);
  letter-spacing: -0.02em;
  flex-shrink: 0;
}

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 0;
  flex: 1;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    font-size: 0.82rem;
    text-decoration: none;
    color: var(--text-secondary);
    padding: 6px 10px;
    border-radius: 999px;
    white-space: nowrap;

    &:hover {
      color: var(--text-heading);
      background: var(--bg-muted);
    }
  }
}

.toggles {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.icon-btn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  color: var(--text-secondary);
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 700;
  transition: color var(--transition), border-color var(--transition);

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
}
</style>
