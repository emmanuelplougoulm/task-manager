<template>
  <tr>
    <Cell :value="title" />
    <Cell :value="description" />
    <Cell :value="status" />
    <Cell :value="dueDate" />
    <Cell value="action cell" />
  </tr>
</template>

<script setup lang="ts">
import Cell from './Cell.vue'

type TTaskCardProps = {
  title: string
  description: string
  status: string
  dueDate: string
}

const { title, description, status, dueDate } = defineProps<TTaskCardProps>()
</script>

<style scoped>
tr {
  width: 100%;
  height: 40px;
}
</style>
