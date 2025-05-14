<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'

import NewTaskCard from '@components/NewTaskCard/NewTaskCard.vue'
import TaskRow from '@components/TaskRow/TaskRow.vue'

import { useTaskStore } from '@stores/taskStore'

const taskStore = useTaskStore()
const { tasks, hasTask } = toRefs(taskStore)

</script>

<template>
  <div>
    Add new task
    <NewTaskCard />
  </div>

  <div v-if="hasTask">Display task list</div>
  <div v-else>You have no task yet, create one</div>
    <TaskRow
      :title="task.title"
      :description="task.description"
      :status="task.status"
      :dueDate="task.dueDate"
    />
  </div>
</template>

<style scoped></style>
