import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const showAddModal = ref<boolean>(false);
  const showEditModal = ref<boolean>(false);

  const currentTaskId = ref<string>('');

  const openEditModal = (id: string) => {
    currentTaskId.value = id;
    showEditModal.value = true;
  };

  return {
    showAddModal,
    showEditModal,
    currentTaskId,
    openEditModal
  };
});
