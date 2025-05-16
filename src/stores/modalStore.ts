import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const showAddModal = ref<boolean>(false);
  const showEditModal = ref<boolean>(false);

  const currentTaskId = ref<string>('');

  const openEditModal = (id: string) => {
    currentTaskId.value = id;
  };

  return {
    showAddModal,
    showEditModal,
    currentTaskId,
    openEditModal
  };
});
