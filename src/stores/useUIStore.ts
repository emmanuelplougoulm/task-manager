import { defineStore } from 'pinia';
import { ref } from 'vue';

interface RightPanel {
  open: boolean;
  mode: 'create' | 'edit' | null;
  cardId: string | null;
}

export const useUIStore = defineStore('ui', () => {
  const rightPanel = ref<RightPanel>({
    open: false,
    mode: null,
    cardId: null
  });

  return { rightPanel };
});
