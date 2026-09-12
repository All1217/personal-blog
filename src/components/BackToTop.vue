<template>
  <button
    v-show="visible"
    type="button"
    class="back-to-top"
    :aria-label="label"
    :title="label"
    @click="jumpToTop"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 14l6-6 6 6"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const props = withDefaults(
  defineProps<{
    threshold?: number
    ariaLabel?: string
  }>(),
  { threshold: 400 }
)

const { t } = useI18n()
const visible = ref(false)
let ticking = false

const label = computed(() => props.ariaLabel || t('actions.backToTop'))

/** 根据滚动距离决定是否显示按钮 */
function updateVisibility() {
  visible.value = window.scrollY > props.threshold
  ticking = false
}

/** 用 rAF 合并高频 scroll，避免每帧都算 */
function onScroll() {
  if (ticking) return
  ticking = true
  window.requestAnimationFrame(updateVisibility)
}

/** 瞬间回到页顶，不做平滑滚动 */
function jumpToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped lang="less">
.back-to-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 15;
  width: 42px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--bg-elevated);
  color: var(--text-secondary);
  box-shadow: var(--shadow);
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: var(--accent);
    border-color: var(--accent);
  }
}
</style>
