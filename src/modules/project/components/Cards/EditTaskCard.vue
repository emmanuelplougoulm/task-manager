<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// import { ref, watch } from 'vue';
// import { useTaskStore } from '@stores/index';

type TCardDetailProps = {
  show: boolean;
};

// const localTask = ref();

// const taskStore = useTaskStore();
// const { getTaskById, editTask, currentTaskId } = taskStore;

// console.log('currentTaskId', currentTaskId);

// watch(currentTaskId, (newId) => {
//   if (!newId) return;
//   const originalTask = getTaskById(newId);

//   if (originalTask) {
//     localTask.value = { ...originalTask };
//   }
// });

defineProps<TCardDetailProps>();
</script>

<template>
  <div :class="['card-details', { show: show }]">
    I AM THE EDIT CARD
    <!-- <div v-if="localTask" class="content">
      <TextInput label="title" v-model:text="localTask.title" type="text" />
      <TextInput label="description" v-model:text="localTask.description" type="text" />
      <TextInput label="due date" v-model:text="localTask.dueDate" type="date" />
    </div> -->
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.card-details {
  width: 100px;
  opacity: 1;
  overflow: hidden;
  height: 100%;
  background-color: var(--glassmorphism-panel-bg);
  border-radius: 8px;
  transition:
    width 0.2s,
    opacity 0.2s;
}

.card-details.show {
  width: 300px;
  opacity: 1;
}
</style>
