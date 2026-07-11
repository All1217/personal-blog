import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 共享的 scroll 事件 composable
 * 使用 requestAnimationFrame 节流，避免高频触发导致性能问题
 *
 * @param {Object} options
 * @param {number} options.threshold - NavBar 阴影出现阈值（px），默认 50
 * @param {number} options.showBtnAt - 回到顶部按钮出现阈值（px），默认 400
 * @returns {{ scrolled, backVisible }}
 */
export function useScroll({ threshold = 50, showBtnAt = 400 } = {}) {
  const scrolled = ref(false)
  const backVisible = ref(false)

  let ticking = false

  const onScroll = () => {
    // 使用 rAF 节流：每次帧只执行一次回调，避免在一个帧内重复计算
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        scrolled.value = y > threshold
        backVisible.value = y > showBtnAt
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', onScroll))

  return { scrolled, backVisible }
}
