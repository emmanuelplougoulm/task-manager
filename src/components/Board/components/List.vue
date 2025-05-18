<template>
  <div class="list" @dragover.prevent @drop="onDrop">
    <ListHeader :listName="listName" />
    <Card
      v-for="task in filteredTasks"
      :key="task.id"
      :title="task.title"
      :id="task.id"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Card from './Card.vue';
import ListHeader from './ListHeader.vue';
import { useTaskStore } from '@stores/index';
import { filterTasksByStatus } from '../../../utils/format.ts';

const props = defineProps({
  listName: String
});
const { listName } = props;

const taskStore = useTaskStore();
const { tasks, editTaskStatus } = taskStore;

const filteredTasks = computed(() => {
  return filterTasksByStatus(tasks, listName);
});

function onDrop(event) {
  const taskId = event.dataTransfer.getData('taskId');
  editTaskStatus(taskId, listName);
}
</script>

<style scoped>
.list {
  width: 272px;
  background-color: aqua;
  background-color: var(--secondary-color);
  padding: 1rem;
  margin: 5px;
  border-radius: var(--border-radius);
  border: 1px red solid;
  height: 100%;
}
.list:hover {
  border: 0.5px solid var(--tertiary-color);
}
</style>
