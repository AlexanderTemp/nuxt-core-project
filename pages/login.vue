<script setup lang="ts">
import ThemeToggler from '~/components/utils/ThemeToggler.vue';
</script>
<template>
  <div class="bg- min-h-screen w-full grid place-items-center">
    <UCard
      class="min-h-[500px] h-[70vh] w-[60vw]"
      :ui="{
        body: 'h-full !p-2 '
      }"
    >
      <div class="h-full grid lg:grid-cols-12 gap-4">
        <div
          class="lg:col-span-7 relative bg-[url(~/assets/img/login_1.jpg)] img-shape"
        />
        <div class="lg:col-span-5 flex flex-col justify-between items-center">
          <div class="w-full flex justify-between items-center">
            <p>LOGO</p>
            <ThemeToggler />
          </div>
          <div class="w-[80%] flex flex-col gap-6">
            <div class="flex flex-col items-center gap-1">
              <h1>Iniciar sesión</h1>
              <h3>NuxtJS + NuxtUI + Pinia</h3>
            </div>

            <div class="flex flex-col gap-4">
              <UFormField label="Email">
                <UInput class="w-full" />
              </UFormField>
              <UFormField label="Password">
                <UInput class="w-full" />
              </UFormField>
              <div class="flex justify-end">
                <UButton variant="link" size="sm"
                  >¿Olvidaste tu contraseña?</UButton
                >
              </div>
            </div>

            <UButton label="Iniciar sesión" />
          </div>

          <p>
            ¿No tienes una cuenta?<span
              ><UButton variant="link">Registrate aquí</UButton></span
            >
          </p>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style lang="css" scoped>
.img-shape {
  background-position: center;
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0% 100%);
  border-radius: 15px;
}
</style>
