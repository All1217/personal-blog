<template>
  <article class="writing-card">
    <div class="writing-card__meta">
      <time>{{ writing.date }}</time>
      <span class="dot">·</span>
      <span>{{ tx(writing.category) }}</span>
      <span class="dot">·</span>
      <span>{{ writing.readMinutes }} {{ t('actions.minutes') }}</span>
    </div>
    <h3>
      <a
        v-if="writing.href && writing.href !== '#'"
        :href="writing.href"
        target="_blank"
        rel="noreferrer"
      >{{ tx(writing.title) }}</a>
      <span v-else>{{ tx(writing.title) }}</span>
    </h3>
    <p>{{ tx(writing.excerpt) }}</p>
  </article>
</template>

<script setup lang="ts">
import type { Writing } from '../types'
import { useI18n } from '../composables/useI18n'

defineProps<{
  writing: Writing
}>()

const { t, tx } = useI18n()
</script>

<style scoped lang="less">
.writing-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  &__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  h3 {
    font-size: 0.98rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--text-heading);

    a {
      text-decoration: none;

      &:hover {
        color: var(--accent);
      }
    }
  }

  p {
    font-size: 0.84rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
}

.dot {
  opacity: 0.6;
}
</style>
