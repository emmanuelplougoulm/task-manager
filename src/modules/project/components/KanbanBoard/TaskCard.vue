<script setup lang="ts">
import TaskActions from '../TaskActions.vue';
import { formatDueDate } from '@/utils/format';
import type { TTask } from '@/types';

const { task } = defineProps<{ task: TTask }>();

function onDragStart(event: DragEvent) {
  event.dataTransfer?.setData('text/plain', task.id);
}
</script>

<template>
  <article class="card" draggable="true" :aria-label="task.title" @dragstart="onDragStart">
    <div class="card__header">
      <h4 class="card__title">{{ task.title }}</h4>
      <TaskActions :id="task.id" :title="task.title" />
    </div>
    <p v-if="task.description" class="card__description">{{ task.description }}</p>
    <p class="card__date">{{ formatDueDate(task.dueDate) }}</p>
  </article>
</template>

<style scoped>
.card {
  border-radius: 8px;
  background-color: var(--glassmorphism-panel-bg);
  padding: 0.75rem;
  margin-bottom: 0.625rem;
  cursor: grab;
}

.card__header {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.card__title {
  font-size: 1rem;
  font-weight: 600;
}

.card__description {
  font-size: var(--font-size-body);
}

.card__date {
  font-size: 0.75rem;
  opacity: 0.85;
}
</style>
