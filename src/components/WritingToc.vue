<template>
  <nav class="toc" :aria-label="t('writing.toc')">
    <p v-if="showTitle" class="toc__title">{{ t('writing.toc') }}</p>
    <ol>
      <li
        v-for="item in items"
        :key="item.id"
        :class="[`toc__item`, `level-${item.level}`, { active: item.id === activeId }]"
      >
        <a :href="`#${item.id}`" @click.prevent="jumpTo(item.id)">{{ item.text }}</a>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type { TocItem } from '../lib/renderMarkdown'
import { useI18n } from '../composables/useI18n'

const props = withDefaults(
  defineProps<{
    items: TocItem[]
    showTitle?: boolean
  }>(),
  { showTitle: true }
)

const { t } = useI18n()
const activeId = ref('')
let observer: IntersectionObserver | null = null

/** 瞬间跳到对应标题，不做过渡动画 */
function jumpTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'instant', block: 'start' })
  activeId.value = id
  history.replaceState(null, '', `#${id}`)
}

/** 监听正文标题进入视口，高亮当前目录项 */
function observeHeadings() {
  observer?.disconnect()
  if (!props.items.length) return

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      const id = visible[0]?.target.id
      if (id) activeId.value = id
    },
    { rootMargin: '-80px 0px -58% 0px', threshold: 0 }
  )

  for (const item of props.items) {
    const el = document.getElementById(item.id)
    if (el) observer.observe(el)
  }
}

watch(() => props.items, () => {
  requestAnimationFrame(observeHeadings)
})

onMounted(() => {
  requestAnimationFrame(observeHeadings)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped lang="less">
.toc {
  font-size: 0.8rem;
  line-height: 1.4;
}

.toc__title {
  margin-bottom: 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  text-transform: uppercase;
}

ol {
  list-style: none;
}

.toc__item {
  a {
    display: block;
    padding: 4px 0 4px 10px;
    color: var(--text-secondary);
    text-decoration: none;
    border-left: 2px solid transparent;

    &:hover {
      color: var(--accent);
    }
  }

  &.active a {
    color: var(--accent);
    border-left-color: var(--accent);
    font-weight: 600;
  }

  &.level-2 a {
    padding-left: 20px;
  }

  &.level-3 a {
    padding-left: 30px;
  }
}
</style>
