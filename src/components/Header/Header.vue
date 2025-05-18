<script setup lang="ts">
import Logo from '@assets/mangopay__logo.png';
import type { THeaderProps } from '@/custom-types/types';

defineProps<THeaderProps>();
</script>

<template>
  <header class="home__header">
    <h1 class="home__title">
      {{ title }}
    </h1>
    <img :src="Logo" class="home__header__logo" />
  </header>
</template>

<style scoped>
.home__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: var(--border-radius-sm);
}
.home__header__logo {
  position: relative;
  top: 0.1875rem;
  height: 1.125rem;
}
.home__title {
  font-size: 1.125rem;
  font-weight: 600;
  text-wrap: nowrap;
  line-height: 1.25rem;
}

@media only screen and (max-width: 600px) {
  .home__header {
    flex-direction: column;
    gap: 0.25rem;
  }
}

@media only screen and (min-width: 601px) and (max-width: 991px) {
  .home__header {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
