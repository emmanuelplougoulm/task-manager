import { defineStore } from 'pinia';
import { ref } from 'vue';

export type TPanelMode = 'create' | 'edit' | null;

interface RightPanel {
  open: boolean;
  mode: TPanelMode;
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
