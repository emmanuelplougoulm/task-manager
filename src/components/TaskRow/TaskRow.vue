<template>
  <div>
    <div>{{ title }}</div>
    <div>{{ description }}</div>
    <div>{{ status }}</div>
    <div>{{ dueDate }}</div>
  </div>
</template>

<script setup lang="ts">
type TTaskCardProps = {
  title: string
  description: string
  status: string
  dueDate: string
}

const { title, description, status, dueDate } = defineProps<TTaskCardProps>()
</script>

<style scoped></style>
