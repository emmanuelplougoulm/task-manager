<script setup lang="ts">
import { ref, toRefs, computed } from 'vue';
import { BaseModal, TextInput, Button } from '@/_UI/index';
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

const titleError = computed(() => !localTask.value.title.trim());
const descriptionError = computed(() => !localTask.value.description.trim());
const dueDateError = computed(() => !localTask.value.dueDate.trim());

function getTrimmedTask() {
  return {
    title: localTask.value.title.trim(),
    description: localTask.value.description.trim(),
    dueDate: localTask.value.dueDate.trim()
  };
}

const handleAddTask = () => {
  const trimmedTask = getTrimmedTask();

  if (!trimmedTask.title || !trimmedTask.description || !trimmedTask.dueDate) {
    toast.show('All fields are required', 'error');
    return;
  }

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
      <TextInput
        label="title"
        v-model:text="localTask.title"
        type="text"
        :error="titleError"
      />
      <TextInput
        label="description"
        v-model:text="localTask.description"
        type="text"
        :error="descriptionError"
      />
      <TextInput
        label="due date"
        v-model:text="localTask.dueDate"
        type="date"
        :error="dueDateError"
      />
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
