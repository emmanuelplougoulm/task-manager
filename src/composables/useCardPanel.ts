import { useUIStore } from '@stores/useUIStore';

export function useCardPanel() {
  const uiStore = useUIStore();

  const onOpenCreate = () => {
    uiStore.rightPanel = { open: true, mode: 'create', cardId: null };
  };

  const onOpenEdit = (id: string) => {
    uiStore.rightPanel = { open: true, mode: 'edit', cardId: id };
  };

  const closePanel = () => {
    uiStore.rightPanel = { open: false, mode: null, cardId: null };
  };

  return { onOpenCreate, onOpenEdit, closePanel };
}
