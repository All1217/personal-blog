<template>
  <div class="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { initTheme } from './composables/useTheme'
import { initLocale } from './composables/useI18n'

initTheme()
initLocale()
</script>
