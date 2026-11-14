<script setup lang="ts">
import { useProjectStore } from '../store/useProjectStore';
import { FILTER_OPTIONS, SORT_OPTIONS } from '@constants/index';

const projectStore = useProjectStore();
</script>

<template>
  <div class="filter-panel" role="search" aria-label="Filter tasks">
    <input
      v-model="projectStore.search"
      class="filter-panel__search"
      type="search"
      placeholder="Search tasks"
      aria-label="Search tasks"
    />
    <div class="filter-panel__spacer"></div>
    <label class="filter-panel__select">
      <span>Status</span>
      <select v-model="projectStore.filterStatus">
        <option v-for="option in FILTER_OPTIONS" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </label>
    <label class="filter-panel__select">
      <span>Sort</span>
      <select v-model="projectStore.sortOrder">
        <option v-for="option in SORT_OPTIONS" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </label>
  </div>
</template>

<style scoped>
.filter-panel {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 0.75rem 0;
  color: white;
}

.filter-panel__search {
  min-width: 220px;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  font: inherit;
  font-size: 14px;
}

.filter-panel__spacer {
  flex-grow: 1;
}

.filter-panel__select {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
}

.filter-panel__select select {
  padding: 0.4rem;
  border-radius: 4px;
  font: inherit;
}
</style>
