<template>
  <SectionBlock :id="id" :title="t(i18nKey)" :subtitle="t(subtitleKey)">
    <div class="preview-bar">
      <span>{{ t('writing.latest') }}</span>
      <router-link to="/writing">{{ t('writing.allArticles') }} →</router-link>
    </div>
    <div class="card-grid">
      <WritingCard
        v-for="writing in latest"
        :key="`${writing.category}-${writing.slug}`"
        :writing="writing"
      />
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import SectionBlock from '../components/SectionBlock.vue'
import WritingCard from '../components/WritingCard.vue'
import { getLatestWritings } from '../composables/useWritingSearch'
import { useI18n } from '../composables/useI18n'

defineProps<{
  id: string
  i18nKey: string
  subtitleKey: string
}>()

const { t } = useI18n()

/** 首页只展示最近 4 篇 */
const latest = getLatestWritings(4)
</script>

<style scoped lang="less">
.preview-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.8rem;
  color: var(--text-muted);

  a {
    font-weight: 600;
    color: var(--accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
