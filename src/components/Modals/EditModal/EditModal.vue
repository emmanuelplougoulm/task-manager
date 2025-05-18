<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';
import { BaseModal, TextInput, Button } from '@components/index';
import { useTaskStore, useModalStore, useToastStore } from '@stores/index';

const taskStore = useTaskStore();
const { getTaskById, editTask } = taskStore;

const modalStore = useModalStore();
const { currentTaskId, showEditModal } = toRefs(modalStore);

const toast = useToastStore();

const localTask = ref();

watch(currentTaskId, (newId) => {
  if (!newId) return;
  const originalTask = getTaskById(newId);

  if (originalTask) {
    localTask.value = { ...originalTask };
  }
});

const handleEditTask = () => {
  const success = editTask(localTask.value);
  if (success) {
    toast.show('Task successfully updated !', 'success');
  } else {
    toast.show('smth went wrong', 'error');
  }

  showEditModal.value = false;
};

defineProps({
  show: Boolean
});
</script>

<template>
  <BaseModal :show="showEditModal">
    <div v-if="localTask" class="content">
      <TextInput label="title" v-model:text="localTask.title" type="text" />
      <TextInput label="description" v-model:text="localTask.description" type="text" />
      <TextInput label="due date" v-model:text="localTask.dueDate" type="date" />
    </div>
    <div class="button__group">
      <Button @click="handleEditTask" label="Save" />
      <Button @click="() => (showEditModal = false)" label="Cancel" />
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
