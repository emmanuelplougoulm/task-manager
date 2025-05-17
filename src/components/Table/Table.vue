<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import { Row } from '@components/index';
import type { TTask } from '@/custom-types/types';
import { useTaskStore } from '@/stores';

const props = defineProps<{
  hasTask: boolean;
  filteredTasks: TTask[];
}>();

const taskStore = useTaskStore();

console.log('filteredTasks', props.filteredTasks);

const TABLE_HEAD = ['title', 'description', 'status', 'due date', 'actions'];
</script>

<template>
  <table v-if="hasTask">
    <thead>
      <tr>
        <th v-for="(item, index) in TABLE_HEAD" :key="index">
          {{ item }}
        </th>
      </tr>
    </thead>

    <tbody>
      <!-- Don't forget to add logic to display a message when filtered items are 0 -->
      <Row
        v-for="task in filteredTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :status="task.status"
        :dueDate="task.dueDate"
        :id="task.id"
      />
    </tbody>
  </table>
  <div v-else>You have no task yet, create one</div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

thead tr th {
  width: 100%;
  padding: 10px;
  border-top: 1px var(--color-neutral) solid;
  border-bottom: 1px var(--color-neutral) solid;
  text-align: left;
  font-size: var(--font-size-body);
  text-transform: capitalize;
  font-weight: 600;
}

tbody tr:nth-child(odd) {
  background-color: #f9fafb;
}

tbody tr:nth-child(even) {
  background-color: var(--color-secondary-bg);
}
</style>
