<template>
  <tr>
    <Cell :value="title" />
    <Cell :value="description" />
    <Cell :value="status" />
    <Cell :value="dueDate" />
    <td @click="deleteTask(id)">delete task</td>
    <td @click="openModal(id)">edit task</td>
  </tr>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import Cell from './Cell.vue';
import { useTaskStore } from '@stores/taskStore';
import { useModalStore } from '@stores/modalStore';

const taskStore = useTaskStore();
const { deleteTask, getTaskById } = toRefs(taskStore);

const modalStore = useModalStore();
const { openModal } = toRefs(modalStore);

type TTaskCardProps = {
  title: string;
  description: string;
  status: string;
  dueDate: string;
  id: string;
};

const { title, description, status, dueDate, id } = defineProps<TTaskCardProps>();
</script>

<style scoped>
tr {
  width: 100%;
  height: 40px;
}
</style>
