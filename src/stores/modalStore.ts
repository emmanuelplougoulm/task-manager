import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const showModal = ref(false);

  const toggleModal = () => {
    showModal.value = !showModal.value;
  };

  return {
    showModal,
    toggleModal
  };
});
