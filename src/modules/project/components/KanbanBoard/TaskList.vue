<script setup lang="ts">
import { computed, ref } from 'vue';
import TaskCard from './TaskCard.vue';
import { useProjectStore } from '../../store/useProjectStore';
import { STATUS_LABELS } from '@constants/index';
import type { TTaskStatus } from '@/types';

const { status } = defineProps<{ status: TTaskStatus }>();

const projectStore = useProjectStore();
const isOver = ref(false);

const tasks = computed(() => projectStore.filteredTasks.filter((task) => task.status === status));

function onDrop(event: DragEvent) {
  isOver.value = false;
  const taskId = event.dataTransfer?.getData('text/plain');
  if (taskId) projectStore.setStatus(taskId, status);
}
</script>

<template>
  <section
    :class="['list', { 'list--over': isOver }]"
    :aria-label="STATUS_LABELS[status]"
    :data-status="status"
    @dragover.prevent="isOver = true"
    @dragleave="isOver = false"
    @drop.prevent="onDrop"
  >
    <h3 class="list__header">
      {{ STATUS_LABELS[status] }} <span class="list__count">{{ tasks.length }}</span>
    </h3>
    <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
  </section>
</template>

<style scoped>
.list {
  min-height: 240px;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.18);
  color: white;
  transition: background 0.15s;
}

.list--over {
  background: rgba(124, 94, 234, 0.35);
}

.list__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  font-weight: 700;
}

.list__count {
  opacity: 0.8;
}
</style>
