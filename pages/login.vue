<script setup lang="ts"></script>
<template>
  <div class="bg- min-h-screen w-full grid place-items-center">
    <UCard
      class="min-h-[500px] h-[70vh] w-[60vw]"
      :ui="{
        body: 'h-full !p-2 '
      }"
    >
      <div class="h-full grid lg:grid-cols-12 gap-4">
      <div class="h-full grid lg:grid-cols-12 gap-4">
        <div
          class="lg:col-span-7 relative bg-[url(~/assets/img/login_1.jpg)] img-shape bg-cover rounded-md"
          class="lg:col-span-7 relative bg-[url(~/assets/img/login_1.jpg)] img-shape bg-cover rounded-md"
        />
        <div class="w-[80%] lg:col-span-5 flex flex-col justify-between">
        <div class="w-[80%] lg:col-span-5 flex flex-col justify-between">
          <h1>Login</h1>

          <d class="flex">
            <p>Cuerpo</p>
          </d>

          <UButton>Iniciar sesión</UButton>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style lang="css" scoped>
.img-shape {
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0% 100%);
}
</style>

<style lang="css" scoped>
.img-shape {
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0% 100%);
}
</style>
