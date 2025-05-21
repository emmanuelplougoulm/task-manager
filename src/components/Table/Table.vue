<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Row } from '@components/index';
import type { TTask } from '@/custom-types/types';
import { TABLE_HEAD } from '@constants/index';

defineProps<{
  hasTask: boolean;
  filteredTasks: TTask[];
}>();
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
  <div class="table__no-task" v-else>
    <p>Oh no ! You have no task yet... <br />Add one to get started !</p>
  </div>
</template>

<style scoped>
table {
  border: 1px blue solid;
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

.table__no-task {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--color-secondary-bg);
  height: 100%;
}

.table__no-task p {
  text-align: center;
  font-family: var(--font-family);
  color: var(--color-primary);
  font-size: 48px;
  font-weight: 600;
}
</style>
