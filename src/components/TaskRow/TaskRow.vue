<template>
  <tr>
    <Cell :value="title" />
    <Cell :value="description" />
    <Cell :value="status" />
    <Cell :value="dueDate" />
    <div @click="deleteTask(id)">delete task</div>
  </tr>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import Cell from './Cell.vue'
import { useTaskStore } from '@stores/taskStore'

const taskStore = useTaskStore()
const { deleteTask } = toRefs(taskStore)

type TTaskCardProps = {
  title: string
  description: string
  status: string
  dueDate: string
  id: string
}

const { title, description, status, dueDate, id } = defineProps<TTaskCardProps>()
</script>

<style scoped>
tr {
  width: 100%;
  height: 40px;
}
</style>
