<script setup lang="ts">
import { ref, computed, toRefs } from 'vue'

import BaseModal from '@components/BaseModal/BaseModal.vue';

import { useTaskStore } from '@stores/taskStore'

type TSortDirection = 'asc' | 'desc'

const modalStore = useModalStore();
const { showModal, toggleModal } = toRefs(modalStore);

const filterStatus = ref(null)
const sortOrder = ref<TSortDirection>('asc')

const statusOptions = [
  { label: 'all', value: null },
  { label: 'todo', value: 'todo' },
  { label: 'pending', value: 'pending' },
  { label: 'done', value: 'done' },
]
const sortOptions = [
  { label: 'asc', value: 'asc' },
  { label: 'desc', value: 'desc' },
]

const filteredTasks = computed(() => {
  let filtered = tasks.value
  if (filterStatus.value) {
    filtered = filtered.filter((task) => task.status === filterStatus.value)
  }
  return filtered.slice().sort((a, b) => {
    const dateA = new Date(a.dueDate)
    const dateB = new Date(b.dueDate)
    return sortOrder.value === 'asc' ? dateA - dateB : dateB - dateA
  })
})
</script>

<template>
  <div>
    Add new task
    <NewTaskCard />
  </div>

  <div style="margin: 1em 0">
    <label for="statusFilter">Filtrer par statut :</label>
    <select id="statusFilter" v-model="filterStatus">
      <option v-for="option in statusOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>

  <div style="margin: 1em 0">
    <label for="sort">sort</label>
    <select id="statusFilter" v-model="sortOrder">
      <option v-for="option in sortOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>

  <div v-if="hasTask">Display task list</div>
  <div v-else>You have no task yet, create one</div>

  <table v-if="hasTask">
    <tr>
      <th>Titre</th>
      <th>Description</th>
      <th>Statut</th>
      <th @click="toggleSort">
        Date limite
        <span v-if="sortOrder === 'asc'">▲</span>
        <span v-else>▼</span>
      </th>
      <th>Action</th>
    </tr>

    <tbody>
      <!-- Don't forget to add logic to display a message when filtered items are 0 -->

      <TaskRow
        v-for="task in filteredTasks"
        :key="task.id"
        :title="task.title"
        :description="task.description"
        :status="task.status"
        :dueDate="task.dueDate"
        :id="task.id"
      />
      <EditModal :show="showModal" />
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border: 1px red solid;
}
table {
  width: 100%;
  border: 1px violet solid;
}
tr {
  width: 100%;
  border: 1px green solid;
}
</style>
