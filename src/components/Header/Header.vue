<script setup lang="ts">
import Logo from '@assets/mangopay__logo.png';

defineProps<{
  title: string;
}>();
</script>

<template>
  <header class="home__header">
    <h1 class="home__header__title">
      {{ title }}
    </h1>
    <img :src="Logo" class="home__header__logo" />
  </header>
</template>

<style scoped>
.home__header {
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 12px;
  border-radius: 4px;
}
.home__header__logo {
  position: relative;
  top: 3px;
  height: 18px;
}
.home__header__title {
  font-size: 18px;
  font-weight: 600;
  text-wrap: nowrap;
  line-height: 20px;
}

@media only screen and (max-width: 600px) {
  .home__header {
    flex-direction: column;
    gap: 4px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 991px) {
  .home__header {
    flex-direction: column;
    gap: 4px;
  }
}

@media only screen and (min-width: 992px) {
}
</style>
