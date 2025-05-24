<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { toRefs } from 'vue';
import { BaseIcon, Cell } from '@/_UI/index';
import { useDeleteTask } from '@composables/index';
import { useModalStore } from '@stores/index';

interface TableRowProps {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  id: string;
}

const { title, description, status, dueDate, id } = defineProps<TableRowProps>();

const modalStore = useModalStore();
const { openEditModal } = toRefs(modalStore);
</script>

<template>
  <tr>
    <Cell :value="title" />
    <Cell :value="description" />
    <Cell :value="status" />
    <Cell :value="dueDate" />
    <td class="actions">
      <BaseIcon @click="openEditModal(id)" class="row__icon" iconName="pencil" />
      <BaseIcon @click="useDeleteTask(id)" class="row__icon" iconName="garbage" />
    </td>
  </tr>
</template>

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
