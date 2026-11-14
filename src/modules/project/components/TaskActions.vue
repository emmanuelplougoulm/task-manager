<script setup lang="ts">
import { BaseIcon } from '@/_UI/index';
import { useCardPanel } from '@composables/useCardPanel';
import { useDeleteTask } from '@composables/useDeleteTask';

const { id, title } = defineProps<{ id: string; title: string }>();

const { onOpenEdit } = useCardPanel();
const deleteTask = useDeleteTask();
</script>

<template>
  <div class="task-actions">
    <button type="button" class="task-actions__button" :aria-label="`Edit ${title}`" @click="onOpenEdit(id)">
      <BaseIcon iconName="pencil" />
    </button>
    <button type="button" class="task-actions__button" :aria-label="`Delete ${title}`" @click="deleteTask(id)">
      <BaseIcon iconName="garbage" />
    </button>
  </div>
</template>

<style scoped>
.task-actions {
  display: flex;
  gap: 0.25rem;
}

.task-actions__button {
  display: inline-flex;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  color: inherit;
}

.task-actions__button:hover {
  background: rgba(255, 255, 255, 0.15);
}

.task-actions__button :deep(svg) {
  width: 1rem;
  height: 1rem;
}
</style>
