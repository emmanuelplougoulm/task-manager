<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed, type PropType } from 'vue';
// import Card from './Card.vue';
import TaskListHeader from './TaskListHeader.vue';
// import { useTaskStore } from '@stores/index';
import { filterTasksByStatus } from '../../../../utils/format.ts';
// import type { TTaskStatus } from '@/types/index.ts';

const props = defineProps({
  listName: {
    type: String as PropType<TTaskStatus>,
    required: true
  }
});
const { listName } = props;

// const taskStore = useTaskStore();
// const { tasks, editTaskStatus } = taskStore;

// const filteredTasks = computed(() => {
//   return filterTasksByStatus(tasks, listName as string);
// });

// function onDrop(event: DragEvent) {
//   if (event.dataTransfer) {
//     const taskId = event.dataTransfer.getData('taskId');
//     editTaskStatus(taskId, listName as TTaskStatus);
//   }
// }
</script>

<template>
  <div class="list" @dragover.prevent @drop="onDrop">
    <TaskListHeader :listName="listName" />
    <!-- <Card
      v-for="task in filteredTasks"
      :key="task.id"
      :title="task.title"
      :description="task.description"
      :dueDate="task.dueDate"
      :id="task.id"
    /> -->
  </div>
</template>

<style scoped>
.list {
  /* flex-grow: 1; */
  width: 100px;
  /* background-color: var(--color-primary); */
  background: transparent;
  /* padding: 1rem; */
  /* border-radius: 0.5rem; */
  height: 100%;
}
</style>
