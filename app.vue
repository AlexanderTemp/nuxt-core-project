<script setup lang="ts">
import { Toaster } from 'vue-sonner';
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
