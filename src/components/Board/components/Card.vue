<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useModalStore } from '@stores/index';
import { useDeleteTask } from '@composables/index';
import { BaseIcon } from '@components/index';
import type { TCardProps } from '@/custom-types/types';

const props = defineProps<TCardProps>();

const modalStore = useModalStore();
const { openEditModal } = modalStore;

const emit = defineEmits(['dragging']);

function onDragStart(event: {
  dataTransfer: { setData: (arg0: string, arg1: string) => void };
}) {
  event.dataTransfer.setData('taskId', props.id);
  emit('dragging', props.id);
}

function onDragEnd() {
  emit('dragging', null);
}
</script>

<template>
  <div class="card" :draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">
    <div class="card__header">
      <div class="card__title">{{ title }}</div>
      <div class="card__spacer"></div>
      <BaseIcon @click="openEditModal(id)" class="card__icon" iconName="pencil" />
      <BaseIcon @click="useDeleteTask(id)" class="card__icon" iconName="garbage" />
    </div>
    <div class="card__description">{{ description }}</div>
    <div class="card__date">{{ dueDate }}</div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 8px;
  background-color: white;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__header {
  display: flex;
  justify-content: space-between;
}

.card__title {
  font-size: 1.125rem;
  font-weight: 600;
}

.card__description {
  font-weight: 600;
  font-size: var(--font-size-body);
}

.card__date {
  font-size: 0.75rem;
  font-size: var(--font-size-body);
}

.card__spacer {
  flex-grow: 1;
}

.card__icon {
  width: 1rem;
  height: 1rem;
  color: rgb(70, 69, 69);
}
</style>
