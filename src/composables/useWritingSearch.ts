import { computed, unref, type MaybeRef } from 'vue'
import Fuse from 'fuse.js'
import { writings } from '../data/loadWritings'
import { useI18n } from './useI18n'
import { WRITING_CATEGORY_IDS, type Writing, type WritingCategoryId } from '../types'

export type CategoryFilter = 'all' | WritingCategoryId

/** 栏目芯片：全部 + 已登记栏目 */
export function useCategoryOptions() {
  const { t } = useI18n()

  return computed(() => [
    { id: 'all' as const, label: t('writing.all') },
    ...WRITING_CATEGORY_IDS.map((id) => ({ id, label: t(`writing.${id}`) }))
  ])
}

/** 按栏目和关键词过滤文章（Fuse 模糊搜索） */
export function useWritingSearch(
  category: MaybeRef<CategoryFilter>,
  query: MaybeRef<string>
) {
  const { t, tx, locale } = useI18n()

  /** 只保留当前栏目下的文章 */
  const scoped = computed(() => {
    const current = unref(category)
    if (current === 'all') return writings
    return writings.filter((item) => item.category === current)
  })

  /** 把标题/摘要/栏目/正文摊平，供 Fuse 检索 */
  const searchable = computed(() =>
    scoped.value.map((writing) => ({
      writing,
      title: tx(writing.title),
      excerpt: tx(writing.excerpt),
      categoryLabel: t(`writing.${writing.category}`),
      body: writing.body
    }))
  )

  /** 针对当前栏目列表重建模糊索引 */
  const fuse = computed(
    () =>
      new Fuse(searchable.value, {
        ignoreLocation: true,
        threshold: 0.36,
        keys: [
          { name: 'title', weight: 2 },
          { name: 'excerpt', weight: 1.2 },
          { name: 'categoryLabel', weight: 1 },
          { name: 'body', weight: 0.5 }
        ]
      })
  )

  /** 无关键词返回栏目列表，否则返回 Fuse 命中 */
  const results = computed<Writing[]>(() => {
    const keyword = unref(query).trim()
    void locale.value
    if (!keyword) return scoped.value
    return fuse.value.search(keyword).map((hit) => hit.item.writing)
  })

  return { scoped, results }
}

/** 取按日期已排好序的最新若干篇 */
export function getLatestWritings(limit = 4): Writing[] {
  return writings.slice(0, limit)
}
