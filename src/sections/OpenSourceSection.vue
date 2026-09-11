<template>
  <SectionBlock :id="id" :title="t(i18nKey)" :subtitle="t(subtitleKey)">
    <div class="card-grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
import SectionBlock from '../components/SectionBlock.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
import { useI18n } from '../composables/useI18n'

defineProps<{
  id: string
  i18nKey: string
  subtitleKey: string
}>()

const { t } = useI18n()
</script>
