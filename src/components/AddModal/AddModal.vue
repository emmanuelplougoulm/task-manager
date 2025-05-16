<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { BaseModal } from '@components/index';
import { useTaskStore, useModalStore, useToastStore } from '@stores/index';

const taskStore = useTaskStore();
const { addNewTask } = taskStore;

const modalStore = useModalStore();
const { showAddModal } = toRefs(modalStore);

const toast = useToastStore();

const localTask = ref({
  title: '',
  description: '',
  dueDate: ''
});

function getTrimmedTask() {
  return {
    title: localTask.value.title.trim(),
    description: localTask.value.description.trim(),
    dueDate: localTask.value.dueDate.trim()
  };
}

const handleAddTask = () => {
  const trimmedTask = getTrimmedTask();

  const success = addNewTask(trimmedTask);
  if (success) {
    toast.show('Tâche créée !', 'success');
    localTask.value = { title: '', description: '', dueDate: '' };
  } else {
    toast.show('smth went wrong', 'error');
  }

  showAddModal.value = false;
};

defineProps({
  show: Boolean
});
</script>

<template>
  <BaseModal :show="showAddModal">
    <div class="content">
      <input v-model="localTask.title" placeholder="Type a title" />
      <input v-model="localTask.description" placeholder="Type a description" />
      <input v-model="localTask.dueDate" placeholder="dd/mm/yyyy" />
    </div>
    <div class="button__group">
      <div @click="handleAddTask">save</div>
    </div>
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
