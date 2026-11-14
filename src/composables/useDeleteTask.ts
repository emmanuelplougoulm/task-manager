import { useProjectStore } from '@/modules/project/store/useProjectStore';
import { useToastStore } from '@stores/index';
import { useCardPanel } from './useCardPanel';
import { useUIStore } from '@stores/useUIStore';

export function useDeleteTask() {
  const projectStore = useProjectStore();
  const toast = useToastStore();
  const uiStore = useUIStore();
  const { closePanel } = useCardPanel();

  return (id: string): boolean => {
    const task = projectStore.getTaskById(id);
    if (!task) return false;
    if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) return false;

    projectStore.deleteTask(id);
    if (uiStore.rightPanel.cardId === id) closePanel();
    toast.show('Task deleted', 'success');
    return true;
  };
}
