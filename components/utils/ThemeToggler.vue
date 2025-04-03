<script lang="ts" setup>
enum EnumThemePreferences {
  light = 'light',
  dark = 'dark',
  system = 'system'
}

const colorMode = useColorMode();

const items = computed(() => [
  {
    label: 'Modo día',
    icon: 'i-lucide-sun',
    type: 'checkbox' as const,
    checked: colorMode.preference === EnumThemePreferences.light,
    onUpdateChecked() {
      colorMode.preference = EnumThemePreferences.light;
    },
    onSelect(e: Event) {
      e.preventDefault();
    }
  },
  {
    label: 'Modo noche',
    icon: 'i-lucide-moon',
    type: 'checkbox' as const,
    checked: colorMode.preference === EnumThemePreferences.dark,
    onUpdateChecked() {
      colorMode.preference = EnumThemePreferences.dark;
    },
    onSelect(e: Event) {
      e.preventDefault();
    }
  },
  {
    label: 'Sistema',
    icon: 'i-lucide-monitor',
    type: 'checkbox' as const,
    checked: colorMode.preference === EnumThemePreferences.system,
    onUpdateChecked() {
      colorMode.preference = EnumThemePreferences.system;
    },
    onSelect(e: Event) {
      e.preventDefault();
    }
  }
]);
</script>

<template>
  <UDropdownMenu :items="items" arrow :ui="{ content: 'w-42' }">
    <UButton
      class="rounded-lg"
      :icon="
        colorMode.preference == 'light'
          ? 'i-lucide-sun'
          : colorMode.preference == 'dark'
          ? 'i-lucide-moon'
          : 'i-lucide-monitor'
      "
      color="neutral"
      variant="outline"
    />
  </UDropdownMenu>
</template>
