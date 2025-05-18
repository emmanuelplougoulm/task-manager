import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { TTask, TTaskStatus, TSortDirection } from '@/custom-types/types';
import { saveTasksToLocalStorage, loadTasksFromLocalStorage } from '@/utils/localStorage';
import { filterTasksByStatus, sortTasksByDueDate } from '@/utils/format';

export const useTaskStore = defineStore('task', () => {
  const defaultTasks: TTask[] = [
    {
      id: '',
      title: '',
      description: '',
      dueDate: '',
      status: 'todo'
    }
  ];

  /* REFS */
  const filterStatus = ref(null);
  const sortOrder = ref<TSortDirection>('asc');

  const tasks = ref<TTask[]>(
    loadTasksFromLocalStorage().length > 0 ? loadTasksFromLocalStorage() : defaultTasks
  );

  /* COMPUTED */
  const hasTask = computed(() => tasks.value.length > 0);

  /* TODO split in 2 functions */
  const filteredTasks = computed(() => {
    const filtered = filterTasksByStatus(tasks.value, filterStatus.value);
    return sortTasksByDueDate(filtered, sortOrder.value);
  });

  /* WATCH */
  watch(
    tasks,
    (newTasks) => {
      saveTasksToLocalStorage(newTasks);
    },
    { deep: true }
  );

  const addNewTask = (task: {
    title: string;
    description: string;
    dueDate: string;
  }): boolean => {
    try {
      const newTask: TTask = {
        id: uuidv4(),
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        status: 'todo' as TTaskStatus
      };

      tasks.value.push(newTask);
      return true;
    } catch (error) {
      window.alert(error);
      return false;
    }
  };

  const editTask = (updatedTask: TTask): boolean => {
    try {
      const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
      tasks.value[index] = { ...tasks.value[index], ...updatedTask };

      return true;
    } catch (error) {
      window.alert(error);
      return false;
    }
  };
  const editTaskStatus = (id: string, status: TTaskStatus): void => {
    // console.log('id', id);
    // console.log('status', status);
    const task = tasks.value.find((task) => task.id === id);

    if (task) {
      task.status = status;
    }
  };

  const deleteTask = (id: string): boolean => {
    try {
      const initialLength = tasks.value.length;
      tasks.value = tasks.value.filter((task) => task.id !== id);

      if (tasks.value.length === initialLength) {
        window.alert(`Task with id ${id} not found.`);
      }
      return true;
    } catch (error) {
      window.alert(error);
      return false;
    }
  };

  const getTaskById = (id: string): TTask | undefined => {
    try {
      const foundTask = tasks.value.find((task) => task.id === id);
      if (!foundTask) {
        window.alert(`Task with id ${id} not found.`);
      }
      return foundTask;
    } catch (error) {
      window.alert(error instanceof Error ? error.message : String(error));
      return undefined;
    }
  };

  return {
    tasks,
    hasTask,
    filterStatus,
    filteredTasks,
    sortOrder,
    addNewTask,
    deleteTask,
    getTaskById,
    editTask
  };
});
