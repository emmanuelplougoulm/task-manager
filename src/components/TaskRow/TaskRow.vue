<template>
  <tr>
    <Cell :value="title" />
    <Cell :value="description" />
    <Cell :value="status" />
    <Cell :value="dueDate" />
    <td @click="handleDeleteTask(id)">delete task</td>
    <td @click="openModal(id)">edit task</td>
  </tr>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Cell from './Cell.vue';
import { useTaskStore } from '../../stores/taskStore';
import { useModalStore } from '../../stores/modalStore';
import { useToastStore } from '../../stores/toastStore';

type TTaskCardProps = {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  id: string;
};
const { title, description, status, dueDate, id } = defineProps<TTaskCardProps>();

const taskStore = useTaskStore();
const { deleteTask } = taskStore;

const modalStore = useModalStore();
const { openModal } = toRefs(modalStore);

const toast = useToastStore();

const handleDeleteTask = (id: string) => {
  const success = deleteTask(id);
  if (success) toast.show('Tâche supprimée!', 'success');
  else {
    toast.show('Erreur lors de la création de la tâche.', 'error');
  }
};
</script>

<style scoped>
tr {
  width: 100%;
  height: 40px;
}
</style>
