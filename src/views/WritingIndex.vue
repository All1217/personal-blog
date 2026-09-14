<template>
  <section class="writing-index">
    <div class="page-wrap">
      <AppBreadcrumb :items="crumbs" />

      <header class="writing-index__head">
        <h1>{{ t('sections.writing') }}</h1>
        <p>{{ results.length }} {{ t('writing.unit') }}</p>
      </header>

      <div class="writing-toolbar">
        <label class="search">
          <span class="sr-only">{{ t('writing.search') }}</span>
          <input :value="query" type="search" :placeholder="t('writing.search')" autocomplete="off"
            @input="onQueryInput" />
        </label>
        <div class="chips" role="tablist">
          <button v-for="item in categoryOptions" :key="item.id" type="button" role="tab"
            :aria-selected="activeCategory === item.id" :class="{ active: activeCategory === item.id }"
            @click="selectCategory(item.id)">
            {{ item.label }}
          </button>
        </div>
      </div>

      <div v-if="results.length" class="card-grid">
        <WritingCard v-for="writing in results" :key="`${writing.category}-${writing.slug}`" :writing="writing" />
      </div>
      <p v-else class="empty">{{ t('writing.empty') }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppBreadcrumb from '../components/AppBreadcrumb.vue'
import WritingCard from '../components/WritingCard.vue'
import { useCategoryOptions, useWritingSearch } from '../composables/useWritingSearch'
import { useI18n } from '../composables/useI18n'
import { isWritingCategory, type BreadcrumbItem } from '../types'
import type { CategoryFilter } from '../composables/useWritingSearch'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const categoryOptions = useCategoryOptions()

/** 从路径读取栏目；非法值回全部索引 */
const activeCategory = computed<CategoryFilter>(() => {
  const raw = route.params.category
  if (typeof raw === 'string' && isWritingCategory(raw)) return raw
  return 'all'
})

/** 搜索词与地址栏 q 同步 */
const query = computed(() => {
  const raw = route.query.q
  return typeof raw === 'string' ? raw : ''
})

const { results } = useWritingSearch(activeCategory, query)

/** 索引页面包屑：首页 / 文字创作 [/ 栏目] */
const crumbs = computed<BreadcrumbItem[]>(() => {
  const items: BreadcrumbItem[] = [
    { label: t('nav.home'), to: '/' },
    { label: t('sections.writing'), to: '/writing' }
  ]
  if (activeCategory.value !== 'all') {
    items.push({ label: t(`writing.${activeCategory.value}`) })
  }
  return items
})

/** 非法栏目参数重定向到 /writing，保留搜索词 */
watch(
  () => route.params.category,
  (raw) => {
    if (typeof raw === 'string' && raw && !isWritingCategory(raw)) {
      router.replace({ path: '/writing', query: route.query })
    }
  },
  { immediate: true }
)

/** 写入搜索 query，不堆历史记录 */
function onQueryInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  const nextQuery = value.trim() ? { q: value } : {}
  router.replace({ path: route.path, query: nextQuery })
}

/** 切换栏目 tab，保留当前搜索词 */
function selectCategory(id: CategoryFilter) {
  const path = id === 'all' ? '/writing' : `/writing/${id}`
  router.push({ path, query: route.query })
}
</script>

<style scoped lang="less">
.writing-index {
  padding: 20px 0 40px;
}

.writing-index__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;

  h1 {
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    color: var(--text-heading);
  }

  p {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
}

.writing-toolbar {
  display: grid;
  gap: 10px;
  margin-bottom: 14px;
}

.search input {
  width: 100%;
  height: 38px;
  padding: 0 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg-elevated);
  color: var(--text);
  font: inherit;
  font-size: 0.88rem;
  outline: none;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--text-muted);
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  button {
    height: 30px;
    padding: 0 10px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--bg-elevated);
    color: var(--text-secondary);
    font: inherit;
    font-size: 0.78rem;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
}

.empty {
  padding: 20px 0 12px;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
