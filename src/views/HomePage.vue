<template>
  <main>
    <ProfileIntro />
    <component :is="section.component" v-for="section in sections" :id="section.id" :key="section.id"
      :i18n-key="section.i18nKey" :subtitle-key="section.subtitleKey" />
  </main>
</template>

<script setup lang="ts">
import ProfileIntro from '../components/ProfileIntro.vue'
import { getEnabledSections } from '../sections/registry'

const sections = getEnabledSections()
</script>
