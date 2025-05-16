<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import { TaskRow } from '@components/index';
import type { TTask } from '@/custom-types/types';

defineProps<{
  hasTask: boolean;
  filteredTasks: TTask[];
}>();
</script>

<template>
  <table v-if="hasTask">
    <!-- <tr>
      <th>Titre</th>
      <th>Description</th>
      <th>Statut</th>
      <th @click="toggleSort">
        Date limite
        <span v-if="sortOrder === 'asc'">▲</span>
        <span v-else>▼</span>
      </th>
      <th>Action</th>
    </tr> -->

    <tbody>
      <!-- Don't forget to add logic to display a message when filtered items are 0 -->

      <TaskRow
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
  border: 1px red solid;
}
table {
  width: 100%;
  border: 1px violet solid;
}
tr {
  width: 100%;
  border: 1px green solid;
}

.actions {
  display: flex;
  gap: 20px;
}
</style>
