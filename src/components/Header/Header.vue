<script setup lang="ts">
// import Logo from '@assets/mangopay__logo.png';
import { Button } from '@components/index';
import type { THeaderProps } from '@/custom-types/types';

defineProps<THeaderProps>();
</script>

<template>
  <header class="home__header">
    <!-- <h1 class="home__title">Temp</h1> -->
    <div>
      <div>Today's date</div>
      <div>21 May 2025</div>
    </div>

    <div>
      <div>People on project</div>
      <div>Test</div>
    </div>

    <!-- <img :src="Logo" class="home__header__logo" />
    <p>Add a date</p>
    <p>Add a list of avatars</p> -->
    <div class="spacer"></div>
    <Button
      label="Add new task"
      :onClick="() => (showAddModal = true)"
    />
  </header>
</template>

<style scoped>
.home__header {
  border: 1px red solid;
  padding: 1rem;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 8px;
  height: 80px;
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

.spacer {
  flex-grow: 1;
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
