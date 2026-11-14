<script setup lang="ts">
import { Badge } from '@/_UI/index';
import TaskActions from '../TaskActions.vue';
import { STATUS_LABELS } from '@constants/index';
import { formatDueDate } from '@/utils/format';
import type { TTask } from '@/types';

defineProps<{ task: TTask }>();
</script>

<template>
  <tr class="table-row">
    <td class="table-row__title">{{ task.title }}</td>
    <td>{{ task.description || '—' }}</td>
    <td><Badge :label="STATUS_LABELS[task.status]" :color="task.status" /></td>
    <td>{{ formatDueDate(task.dueDate) }}</td>
    <td><TaskActions :id="task.id" :title="task.title" /></td>
  </tr>
</template>

<style scoped>
td {
  padding: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: var(--font-size-body);
  vertical-align: middle;
}

.table-row__title {
  font-weight: 600;
}
</style>
