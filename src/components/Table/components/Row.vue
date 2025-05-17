<template>
  <tr>
    <Cell :value="title" />
    <Cell :value="description" />
    <Cell :value="status" />
    <Cell :value="dueDate" />
    <td class="actions">
      <BaseIcon @click="openEditModal(id)" class="row__icon" iconName="pencil" />
      <BaseIcon @click="handleDeleteTask(id)" class="row__icon" iconName="garbage" />
    </td>
  </tr>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { BaseIcon, Cell } from '@components/index';
import { useTaskStore, useModalStore, useToastStore } from '@stores/index';

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
const { openEditModal } = toRefs(modalStore);

const toast = useToastStore();

const handleDeleteTask = (id: string) => {
  const confirmed = window.confirm(
    'You are about to delete this task, do you want to proceed? '
  );
  if (!confirmed) return;

  const success = deleteTask(id);
  if (success) toast.show('Tâche supprimée!', 'success');
  else {
    toast.show('Erreur lors de la création de la tâche.', 'error');
  }
};
</script>

<style scoped>
tr {
  border: none;
}

.actions {
  display: flex;
  gap: 1.25rem;
}

.row__icon {
  width: 1rem;
  height: 1rem;
}
</style>
