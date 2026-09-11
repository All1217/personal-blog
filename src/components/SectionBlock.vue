<template>
  <section class="section-block" :id="id">
    <div class="page-wrap">
      <header class="section-head">
        <h2>{{ title }}</h2>
        <p v-if="subtitle">{{ subtitle }}</p>
      </header>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  title: string
  subtitle?: string
}>()
</script>

<style scoped lang="less">
@import '../styles/mixins.less';

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-heading);
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  p {
    font-size: 0.82rem;
    color: var(--text-secondary);
    text-align: right;
    line-height: 1.45;
  }

  .mobile({
    flex-direction: column;
    gap: 4px;

    p {
      text-align: left;
    }
  });
}
</style>
