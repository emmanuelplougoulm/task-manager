<script setup lang="ts">
import TableRow from './TableRow.vue';
import EmptyState from '../EmptyState.vue';
import { useProjectStore } from '../../store/useProjectStore';
import { TABLE_HEAD } from '@constants/index';

const projectStore = useProjectStore();
</script>

<template>
  <table v-if="projectStore.filteredTasks.length" class="table-board" aria-label="Tasks">
    <thead>
      <tr>
        <th v-for="item in TABLE_HEAD" :key="item" scope="col">{{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <TableRow v-for="task in projectStore.filteredTasks" :key="task.id" :task="task" />
    </tbody>
  </table>
  <EmptyState v-else :filtered="projectStore.hasTask" />
</template>

<style scoped>
.table-board {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

th {
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  text-align: left;
  font-size: var(--font-size-body);
  font-weight: 600;
}
</style>
