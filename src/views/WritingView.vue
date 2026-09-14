<template>
  <article class="writing-page">
    <div class="page-wrap writing-wrap">
      <AppBreadcrumb :items="crumbs" />

      <template v-if="writing">
        <div class="writing-layout" :class="{ 'has-toc': toc.length }">
          <aside v-if="toc.length" class="toc-aside">
            <div class="toc-scroll">
              <WritingToc :items="toc" />
            </div>
          </aside>

          <div class="writing-main">
            <details v-if="toc.length" class="toc-mobile">
              <summary>{{ t('writing.toc') }}</summary>
              <WritingToc :items="toc" :show-title="false" />
            </details>

            <header class="writing-page__head">
              <p class="meta">
                <span>{{ t(`writing.${writing.category}`) }}</span>
                <span>·</span>
                <time>{{ writing.date }}</time>
                <span>·</span>
                <span>{{ writing.readMinutes[locale] }} {{ t('actions.minutes') }}</span>
              </p>
              <h1>{{ tx(writing.title) }}</h1>
              <p class="excerpt">{{ tx(writing.excerpt) }}</p>
            </header>
            <div class="prose" v-html="html"></div>
          </div>
        </div>
      </template>

      <p v-else class="empty">{{ t('writing.notFound') }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppBreadcrumb from '../components/AppBreadcrumb.vue'
import WritingToc from '../components/WritingToc.vue'
import { getWriting } from '../data/loadWritings'
import { renderWriting } from '../lib/renderMarkdown'
import { useI18n } from '../composables/useI18n'
import { isWritingCategory, type BreadcrumbItem } from '../types'

const route = useRoute()
const { t, tx, locale } = useI18n()

/** 按栏目 + slug 取当前文章 */
const writing = computed(() =>
  getWriting(String(route.params.category), String(route.params.slug))
)

/** 按当前语言渲染正文 HTML 与目录 */
const rendered = computed(() =>
  writing.value ? renderWriting(writing.value, locale.value) : { html: '', toc: [] }
)

const html = computed(() => rendered.value.html)
const toc = computed(() => rendered.value.toc)

/** 阅读页层级：首页 / 文字创作 / 栏目 / 标题（找不到则停在栏目或索引） */
const crumbs = computed<BreadcrumbItem[]>(() => {
  const categoryParam = String(route.params.category)
  const items: BreadcrumbItem[] = [
    { label: t('nav.home'), to: '/' },
    { label: t('sections.writing'), to: '/writing' }
  ]

  if (isWritingCategory(categoryParam)) {
    items.push({
      label: t(`writing.${categoryParam}`),
      to: `/writing/${categoryParam}`
    })
  }

  if (writing.value) {
    items.push({ label: tx(writing.value.title) })
  }

  return items
})
</script>

<style scoped lang="less">
@import '../styles/mixins.less';

.writing-page {
  padding: 20px 0 40px;
}

.writing-wrap {
  max-width: 1180px;
}

.writing-layout.has-toc {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 28px;
  align-items: start;

  .mobile({
    grid-template-columns: 1fr;
    gap: 12px;
  });
}

.toc-aside {
  position: sticky;
  top: 72px;
  max-height: calc(100vh - 88px);
  padding: 2px 22px 8px 0;
  border-right: 1px solid color-mix(in srgb, var(--text-muted) 26%, transparent);

  .mobile({
    display: none;
  });
}

.toc-scroll {
  max-height: calc(100vh - 96px);
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.toc-mobile {
  display: none;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.84rem;

  summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--text-heading);
  }

  .mobile({
    display: block;
  });
}

.writing-page__head {
  margin-bottom: 16px;

  h1 {
    font-size: 1.7rem;
    line-height: 1.25;
    letter-spacing: -0.03em;
    color: var(--text-heading);
    margin: 8px 0;
  }
}

.meta,
.excerpt,
.empty {
  color: var(--text-secondary);
  font-size: 0.88rem;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  color: var(--text-muted);
  font-size: 0.78rem;
}

.empty {
  padding: 32px 0;
}
</style>

<style lang="less">
@import '../styles/prose.less';

.prose {
  .writing-prose();

  h1,
  h2,
  h3 {
    scroll-margin-top: 72px;
  }
}
</style>
