<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs } from 'vue';
import { useModalStore, useTaskStore } from '@stores/index';
import { Dropdown } from '@/_UI/index';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@constants/index';

const taskStore = useTaskStore();
const { filterStatus, sortOrder } = toRefs(taskStore);

// const modalStore = useModalStore();
// const { showAddModal } = toRefs(modalStore);
</script>

<template>
  <div class="filter-panel">
    <input type="text" placeholder="search a task" />

    <div class="filter-panel__spacer"></div>
    <div class="filter-panel__cta">
      <Dropdown v-model="sortOrder" :options="SORT_OPTIONS" placeholder="Sort" />
      <Dropdown v-model="filterStatus" :options="FILTER_OPTIONS" placeholder="Filter" />
    </div>
  </div>
</template>

<style>
.filter-panel {
  border: 1px blue solid;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 60px;
}

.filter-panel__spacer {
  flex-grow: 1;
}

.filter-panel__cta {
  display: flex;
  gap: 0.625rem;
}

/* @media only screen and (max-width: 600px) {
  .filter-panel {
    height: 6.25rem;
    flex-direction: column;
    gap: 0.25rem;
    align-items: flex-start;
  }
} */
</style>
