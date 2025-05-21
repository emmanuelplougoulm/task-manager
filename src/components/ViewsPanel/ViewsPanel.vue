<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs } from 'vue';
import { useModalStore, useTaskStore } from '@stores/index';
import { Tabs, Button, Dropdown } from '@components/index';
import { VIEWS } from '@constants/index';
import type { TActionsProps } from '@/custom-types/types';

const taskStore = useTaskStore();
const { filterStatus, sortOrder } = toRefs(taskStore);

const modalStore = useModalStore();
const { showAddModal } = toRefs(modalStore);

defineProps<TActionsProps>();
const modelValue = defineModel<number>({ default: 0 });
</script>

<template>
  <div class="views-panel">
    <Button
      v-for="view in VIEWS"
      :label="view"
      :key="view"
      :onClick="() => (showAddModal = true)"
    />
    <div class="home__actions__spacer"></div>
    <Button label="Create new task" :onClick="() => (showAddModal = true)" />
  </div>
</template>

<style>
.views-panel {
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

@media only screen and (max-width: 600px) {
  .home__actions {
    height: 6.25rem;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
  }
}
</style>
