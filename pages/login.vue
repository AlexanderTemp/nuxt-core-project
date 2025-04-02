<script setup lang="ts"></script>
<template>
  <div class="min-h-screen w-full grid place-items-center">
    <UCard
      class="h-[70vh] w-[70vw]"
      :ui="{
        body: '!p-2'
      }"
    >
      <div class="grid lg:grid-cols-2 gap-4">
        <div
          class="w-full h-full rounded-sm bg-[url(~/assets/img/login_1.jpg)] relative"
        />
        <div class="flex flex-col justify-between">
          <h1>Login</h1>

          <d class="flex">
            <p>Cuerpo</p>
          </d>

          <d class="flex">
            <UButton>Iniciar sesión</UButton>
          </d>
        </div>
      </div>
    </UCard>
  </div>
</template>
