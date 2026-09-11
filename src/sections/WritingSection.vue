<template>
  <SectionBlock :id="id" :title="t(i18nKey)" :subtitle="t(subtitleKey)">
    <div class="card-grid">
      <WritingCard v-for="writing in writings" :key="writing.id" :writing="writing" />
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import SectionBlock from '../components/SectionBlock.vue'
import WritingCard from '../components/WritingCard.vue'
import { writings } from '../data/writings'
import { useI18n } from '../composables/useI18n'

defineProps<{
  id: string
  i18nKey: string
  subtitleKey: string
}>()

const { t } = useI18n()
</script>
