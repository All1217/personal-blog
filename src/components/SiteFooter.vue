<template>
  <footer class="site-footer">
    <div class="page-wrap site-footer__inner">
      <span>© {{ year }} {{ t('site.name') }}. {{ t('footer.rights') }}</span>
      <span>{{ t('footer.builtWith') }}</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped lang="less">
@import '../styles/mixins.less';

.site-footer {
  margin-top: 32px;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 0.78rem;

  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 18px 20px 28px;

    .mobile({
      flex-direction: column;
      gap: 4px;
    });
  }
}
</style>
