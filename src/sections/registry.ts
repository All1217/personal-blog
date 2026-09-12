import type { BlogSection } from '../types'
import OpenSourceSection from './OpenSourceSection.vue'
import WritingSection from './WritingSection.vue'

export const blogSections: BlogSection[] = [
  {
    id: 'opensource',
    order: 10,
    enabled: true,
    i18nKey: 'sections.opensource',
    subtitleKey: 'sections.opensourceSub',
    component: OpenSourceSection
  },
  {
    id: 'writing',
    order: 20,
    enabled: true,
    i18nKey: 'sections.writing',
    subtitleKey: 'sections.writingSub',
    component: WritingSection,
    href: '/writing'
  }
]

/** 返回已启用且按 order 排序的板块 */
export function getEnabledSections(): BlogSection[] {
  return blogSections
    .filter((section) => section.enabled)
    .sort((a, b) => a.order - b.order)
}
