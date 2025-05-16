<template>
  <div>
    <input v-model="task.title" placeholder="Type a title" />
    <input v-model="task.description" placeholder="Type a description" />
    <input v-model="task.dueDate" placeholder="dd/mm/yyyy" />
    <button @click="handleAddTask">+ Add a task</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '@/stores/taskStore.ts';
import { useToastStore } from '../../stores/toastStore';

const taskStore = useTaskStore();
const { addNewTask } = taskStore;

const toast = useToastStore();

const task = ref({
  title: '',
  description: '',
  dueDate: ''
});

function getTrimmedTask() {
  return {
    title: task.value.title.trim(),
    description: task.value.description.trim(),
    dueDate: task.value.dueDate.trim()
  };
}

const handleAddTask = () => {
  const trimmedTask = getTrimmedTask();

  const success = addNewTask(trimmedTask);

  if (success) {
    toast.show('Tâche créée !', 'success');
    task.value = { title: '', description: '', dueDate: '' };
  } else {
    toast.show('Erreur lors de la suppression de la tâche.', 'error');
  }
};
</script>

<style scoped></style>
