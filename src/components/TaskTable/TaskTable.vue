<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'

import NewTaskCard from '@components/NewTaskCard/NewTaskCard.vue'
import TaskRow from '@components/TaskRow/TaskRow.vue'

import { useTaskStore } from '@stores/taskStore'

const taskStore = useTaskStore()
const { tasks, hasTask } = toRefs(taskStore)

const filterStatus = ref(null)
const statusOptions = [
  { label: 'all', value: null },
  { label: 'todo', value: 'todo' },
  { label: 'pending', value: 'pending' },
  { label: 'done', value: 'done' },
]
const filteredTasks = computed(() => {
  let filtered = tasks.value
  if (filterStatus.value) {
    filtered = filtered.filter((task) => task.status === filterStatus.value)
  }
  return filtered
  console.log('filtered', filtered.value)
})
</script>

<template>
  <div>
    Add new task
    <NewTaskCard />
  </div>

  <div v-if="hasTask">Display task list</div>
  <div v-else>You have no task yet, create one</div>
  <table v-if="hasTask">
    <thead>
      <tr>
        <th>Titre</th>
        <th>Description</th>
        <th>Statut</th>
        <th @click="toggleSort">
          Date limite
          <!-- <span v-if="sortDirection === 'asc'">▲</span>
          <span v-else>▼</span> -->
        </th>
      </tr>
    </thead>
    <tbody>
      <div v-for="task in filteredTasks" :key="task.id">
        <!-- Don't forget to add logic to display a message when filtered items are 0 -->

    <TaskRow
      :title="task.title"
      :description="task.description"
      :status="task.status"
      :dueDate="task.dueDate"
    />
  </div>
    </tbody>
  </table>
</template>

<style scoped></style>
