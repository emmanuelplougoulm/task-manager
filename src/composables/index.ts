import { onMounted, onUnmounted, ref } from 'vue';
import { useTaskStore, useToastStore } from '@stores/index';

export const useDeleteTask = (id: string) => {
  const taskStore = useTaskStore();
  const { deleteTask } = taskStore;
  const toast = useToastStore();

  const confirmed = window.confirm(
    'You are about to delete this task, do you want to proceed? '
  );
  if (!confirmed) return;

  const success = deleteTask(id);
  if (success) toast.show('Task deleted!', 'success');
  else {
    toast.show('Couldn t delete task', 'error');
  }
};


export const useViewportWidth = () => {
  const width = ref(window.innerWidth);

  function updateWidth() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  return { width };
};
