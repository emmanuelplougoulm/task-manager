<template>
  <div class="card" :draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">
    <div>{{ title }}</div>
    <button @click="() => openEditModal(id)">Edit task</button>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@stores/index';

const props = defineProps({
  title: String,
  id: String
});

const modalStore = useModalStore();
const { openEditModal } = modalStore;

const emit = defineEmits('');

function onDragStart(event) {
  event.dataTransfer.setData('taskId', props.id);
  emit('dragging', props.id);
}

function onDragEnd() {
  emit('dragging', null);
}

// const handleTriggerModal = (id) => {
//   onTriggerModal(id);
// };
</script>

<style scoped>
.card {
  background-color: lightgrey;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-radius: var(--border-radius);
  color: var(--secondary-color);
}
</style>
