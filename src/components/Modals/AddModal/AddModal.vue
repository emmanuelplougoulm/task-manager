<script setup lang="ts">
import { ref, toRefs } from 'vue';
import { BaseModal, TextInput, Button } from '@components/index';
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

const handleCancel = () => {
  localTask.value = { title: '', description: '', dueDate: '' };

  showAddModal.value = false;
};

defineProps({
  show: Boolean
});
</script>

<template>
  <BaseModal :show="showAddModal">
    <div class="content">
      <TextInput label="title" v-model:text="localTask.title" type="text" />
      <TextInput label="description" v-model:text="localTask.description" type="text" />
      <TextInput label="due date" v-model:text="localTask.dueDate" type="date" />
    </div>
    <div class="button__group">
      <Button label="Add new task" :onClick="handleAddTask" />
      <Button label="Cancel" :onClick="handleCancel" />
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
