<template>
  <article class="project-card">
    <div class="project-card__top">
      <h3>{{ project.name }}</h3>
      <span class="stars" :title="`${project.stars} stars`">★ {{ project.stars }}</span>
    </div>
    <p>{{ tx(project.description) }}</p>
    <div class="project-card__meta">
      <span class="lang">{{ project.language }}</span>
      <span class="status">{{ tx(project.status) }}</span>
      <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <a class="repo" :href="project.repo" target="_blank" rel="noreferrer">
      {{ t('actions.viewRepo') }} ↗
    </a>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '../types'
import { useI18n } from '../composables/useI18n'

defineProps<{
  project: Project
}>()

const { t, tx } = useI18n()
</script>

<style scoped lang="less">
.project-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  min-height: 100%;

  &__top {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
  }

  h3 {
    font-size: 0.98rem;
    font-weight: 700;
    color: var(--text-heading);
    font-family: ui-monospace, 'SF Mono', 'Cascadia Code', Consolas, monospace;
  }

  p {
    font-size: 0.84rem;
    color: var(--text-secondary);
    line-height: 1.5;
    flex: 1;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
}

.stars {
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.lang,
.status,
.tag {
  font-size: 0.72rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--bg-muted);
  color: var(--text-secondary);
}

.lang {
  color: var(--accent);
  background: var(--accent-soft);
  font-weight: 600;
}

.repo {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
}
</style>
