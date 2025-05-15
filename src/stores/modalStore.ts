import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const showModal = ref(false);
  const currentTaskId = ref<string>('');

  const toggleModal = () => {
    showModal.value = !showModal.value;
  };

  const openModal = (id: string) => {
    currentTaskId.value = id;
    toggleModal();
  };

  return {
    showModal,
    toggleModal,
    currentTaskId,
    openModal
  };
});
