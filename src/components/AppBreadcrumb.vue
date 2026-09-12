<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <ol>
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`">
        <router-link v-if="item.to && index < items.length - 1" :to="item.to">
          {{ item.label }}
        </router-link>
        <span v-else aria-current="page">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="sep" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '../types'

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<style scoped lang="less">
.breadcrumb {
  margin-bottom: 14px;
  font-size: 0.92rem;
  color: var(--text-secondary);

  ol {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    list-style: none;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }

  span[aria-current='page'] {
    color: var(--text-heading);
    font-weight: 600;
  }
}

.sep {
  color: var(--text-muted);
  font-weight: 500;
}
</style>
