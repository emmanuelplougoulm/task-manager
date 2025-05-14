<script setup lang="ts">
import NewTaskCard from '@components/NewTaskCard/NewTaskCard.vue'
import TaskRow from '@components/TaskRow/TaskRow.vue'

import useTaskStore from '@stores/taskStore'

const taskStore = useTaskStore()
const { tasks } = taskStore
</script>

<template>
  <div>
    Add new task
    <NewTaskCard />
  </div>

  <div v-for="task in tasks" :key="task.id">
    <TaskRow
      :title="task.title"
      :description="task.description"
      :status="task.status"
      :dueDate="task.dueDate"
    />
  </div>
</template>

<style scoped></style>
