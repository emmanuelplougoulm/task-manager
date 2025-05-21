<script setup lang="ts">
import HeaderInfo from './components/HeaderInfo.vue';
import { Button } from '@components/index';
import type { THeaderProps } from '@/custom-types/types';

defineProps<THeaderProps>();
</script>

<template>
  <header class="header">
    <HeaderInfo title="Today's date" value="21 May 2025" />
    <HeaderInfo title="People on project" value="Lebron" />

    <div class="header__spacer"></div>
    <Button
      class="header__button"
      label="Add new task"
      :onClick="() => (showAddModal = true)"
    />
  </header>
</template>

<style scoped>
.header {
  /* border: 1px red solid; */
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 8px;
  height: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header__spacer {
  flex-grow: 1;
}

/* @media only screen and (max-width: 600px) {
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
} */
</style>
