<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useNavigationStore, useModalStore } from '@stores/index';
import { Button } from '@/_UI/index';
import { VIEWS } from '@constants/index';

const navigationStore = useNavigationStore();
console.log('navigationStore', navigationStore);

const modalStore = useModalStore();
</script>

<template>
  <div class="views-panel">
    <Button
      v-for="view in VIEWS"
      :label="view"
      :key="view"
      :onClick="() => (navigationStore.activeView = view)"
    />
    <div class="home__actions__spacer"></div>
    <Button label="Create new task" :onClick="() => (modalStore.showAddModal = true)" />
  </div>
</template>

<style>
.views-panel {
  background: transparent;
  border: 1px blue solid;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 60px;
  /* padding: 20px; */
  border-bottom: 1px white solid;
}

.home__actions__spacer {
  flex-grow: 1;
}

.home__actions__cta {
  display: flex;
  gap: 0.625rem;
}

/* @media only screen and (max-width: 600px) {
  .home__actions {
    height: 6.25rem;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
  }
} */
</style>
