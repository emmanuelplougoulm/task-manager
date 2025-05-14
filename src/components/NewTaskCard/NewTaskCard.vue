<template>
  <div>
    <input v-model="taskTitle" placeholder="Type a title" />
    <input v-model="taskDescription" placeholder="Type a description" />
    <input v-model="taskDueDate" placeholder="dd/mm/yyyy" />
    <button @click="handleAddTask">+ Add a task</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore.ts'

const taskStore = useTaskStore()
const taskTitle = ref('')
const taskDescription = ref('')
const taskDueDate = ref('')

const handleAddTask = () => {
  if (taskTitle.value.trim() !== '') {
    taskStore.addNewTask(taskTitle.value, taskDescription, taskDueDate)
  }
}
</script>

<style scoped></style>
