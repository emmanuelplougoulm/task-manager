<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import BaseModal from '../BaseModal/BaseModal.vue';
import { useTaskStore } from '@stores/taskStore';
import { useModalStore } from '@stores/modalStore';

const taskStore = useTaskStore();
const { getTaskById } = taskStore;

const modalStore = useModalStore();
const { currentTaskId, showModal } = toRefs(modalStore);

const currentTask = ref(null);

watch(currentTaskId, (newId) => {
  currentTask.value = getTaskById(newId);
  console.log('currentTask.value', currentTask.value);
});

defineProps({
  show: Boolean
});
</script>

<template>
  <BaseModal :show="showModal">
    <div v-if="currentTask" class="content">
      <div>{{ currentTask.title }}</div>
      <div>{{ currentTask.description }}</div>
      <div>{{ currentTask.dueDate }}</div>
      <div>{{ currentTask.status }}</div>
    </div>
    <div class="button__group"></div>
  </BaseModal>
</template>

<style>
* {
  box-sizing: border-box;
}

h2,
p {
  margin: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.content .title {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-self: stretch;
}

.content .title .text {
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #171717;
  margin: 0;
}

.content .title .icon {
  width: 24px;
  height: 24px;
  color: #525252;
}

.content .description {
  font-family: 'Noto Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #525252;
}

.button__group {
  display: flex;
  gap: 12px;
}

.button__group .button {
  flex: 1;
}
</style>
