<script setup lang="ts">
import Toaster from '@nuxt/ui/runtime/components/Toaster.vue';
</script>
<template>
  <UApp>
    <NuxtLayout name="default">
      <NuxtRouteAnnouncer />
      <NuxtPage />
      <Toaster position="top-center" :expand="true" />
    </NuxtLayout>
  </UApp>
</template>
