<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs } from 'vue';
import { useModalStore, useTaskStore } from '@stores/index';
import { Tabs, Button, Dropdown } from '@components/index';
import {
  FILTER_OPTIONS,
  SORT_OPTIONS,
  ACTIONS_TABS
} from '@constants/index';
import type { TActionsProps } from '@/custom-types/types';

const taskStore = useTaskStore();
const { filterStatus, sortOrder } = toRefs(taskStore);

const modalStore = useModalStore();
const { showAddModal } = toRefs(modalStore);

defineProps<TActionsProps>();
const modelValue = defineModel<number>({ default: 0 });
</script>

<template>
  <div class="home__actions">
    <input type="text" placeholder="search a task" />

    <div class="home__actions__spacer"></div>
    <div class="home__actions__cta">
      <Dropdown
        v-model="sortOrder"
        :options="SORT_OPTIONS"
        placeholder="Sort"
      />
      <Dropdown
        v-model="filterStatus"
        :options="FILTER_OPTIONS"
        placeholder="Filter"
      />
    </div>
  </div>
</template>

<style>
.home__actions {
  /* border: 1px blue solid; */
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 2.625rem;
  padding: 20px;
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
