<template>
  <div class="home__actions">
    <Tabs :tabs="defaultTabs" v-model="modelValue" />
    <div class="home__actions__spacer"></div>

    <div class="home__actions__cta">
      <Dropdown v-model="sortOrder" :options="SORT_OPTIONS" placeholder="Sort" />
      <Dropdown v-model="filterStatus" :options="FILTER_OPTIONS" placeholder="Filter" />

      <Button label="Add new task" :onClick="() => (showAddModal = true)" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useModalStore, useTaskStore } from '@/stores';
import { Tabs, Button, Dropdown } from '@components/index';

const taskStore = useTaskStore();
const { filterStatus, sortOrder } = toRefs(taskStore);

const modalStore = useModalStore();
const { showAddModal } = toRefs(modalStore);

const defaultTabs = ['list view', 'board view'];

const modelValue = defineModel<number>({ default: 0 });

const FILTER_OPTIONS = [
  { label: 'all', value: 'all' },
  { label: 'todo', value: 'todo' },
  { label: 'pending', value: 'pending' },
  { label: 'done', value: 'done' }
];
const SORT_OPTIONS = [
  { label: 'asc', value: 'asc' },
  { label: 'desc', value: 'desc' }
];
</script>

<style>
.home__actions {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 2.625rem;
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

@media only screen and (min-width: 601px) and (max-width: 991px) {
}

@media only screen and (min-width: 992px) {
}
</style>
