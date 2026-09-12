<template>
  <div class="app">
    <SiteHeader />
    <router-view />
    <SiteFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'
import { initTheme } from './composables/useTheme'
import { initLocale } from './composables/useI18n'

initTheme()
initLocale()
</script>
