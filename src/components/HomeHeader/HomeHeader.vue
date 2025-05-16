<script setup lang="ts">
import Logo from '@assets/mangopay__logo.png';

defineProps<{
  title: string;
}>();
</script>

<template>
  <header class="home__header">
    <img :src="Logo" class="home__header__logo" />
    <h1 class="home__header__title">
      {{ title }}
    </h1>
  </header>
</template>

<style scoped>
.home__header {
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
}
.home__header__logo {
  height: 20px;
}
.home__header__title {
  font-size: 24px;
}
</style>
