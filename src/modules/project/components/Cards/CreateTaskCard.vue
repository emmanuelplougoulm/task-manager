<script setup lang="ts">
import TaskForm from './TaskForm.vue';
import { useProjectStore } from '../../store/useProjectStore';
import { useCardPanel } from '@composables/useCardPanel';
import { useToastStore } from '@stores/index';

const projectStore = useProjectStore();
const toast = useToastStore();
const { closePanel } = useCardPanel();

const onSubmit = (values: { title: string; description: string; dueDate: string }) => {
  projectStore.addTask(values);
  toast.show('Task created', 'success');
  closePanel();
};
</script>

<template>
  <TaskForm heading="New task" submitLabel="Create task" @submit="onSubmit" @cancel="closePanel" />
</template>
