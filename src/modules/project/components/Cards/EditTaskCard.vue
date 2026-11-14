<script setup lang="ts">
import { computed } from 'vue';
import TaskForm from './TaskForm.vue';
import { Button } from '@/_UI/index';
import { useProjectStore } from '../../store/useProjectStore';
import { useCardPanel } from '@composables/useCardPanel';
import { useDeleteTask } from '@composables/useDeleteTask';
import { useToastStore, useUIStore } from '@stores/index';
import type { TTask } from '@/types';

const projectStore = useProjectStore();
const uiStore = useUIStore();
const toast = useToastStore();
const { closePanel } = useCardPanel();
const deleteTask = useDeleteTask();

const task = computed(() =>
  uiStore.rightPanel.cardId ? projectStore.getTaskById(uiStore.rightPanel.cardId) : undefined
);

// A fresh object per task so the form resets when another task is opened.
const initial = computed(() => (task.value ? { ...task.value } : undefined));

const onSubmit = (values: Omit<TTask, 'id'>) => {
  if (!task.value) return;
  projectStore.editTask(task.value.id, values);
  toast.show('Task updated', 'success');
  closePanel();
};
</script>

<template>
  <TaskForm
    v-if="task"
    :key="task.id"
    heading="Edit task"
    submitLabel="Save changes"
    :initial="initial"
    showStatus
    @submit="onSubmit"
    @cancel="closePanel"
  >
    <template #extra-actions>
      <Button variant="danger" label="Delete" :onClick="() => task && deleteTask(task.id)" />
    </template>
  </TaskForm>
</template>
