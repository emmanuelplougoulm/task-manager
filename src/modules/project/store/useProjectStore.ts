import type { TSortDirection, TTask, TTaskStatus } from '@/types';
import { computed, ref, watch } from 'vue';
import { filterTasksByStatus, sortTasksByDueDate } from '@/utils/format';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from '@/utils/localStorage';

import { PROJECT_BOARDS } from '@constants/index';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useProjectStore = defineStore('project', () => {
  const defaultTasks: TTask[] | [] = [];

  const activeBoard = ref(PROJECT_BOARDS[0]);

  const showRightPanel = ref(false);

  const currentTaskId = ref<string>('');

  const filterStatus = ref('all');
  const sortOrder = ref<TSortDirection>('asc');

  const tasks = ref<TTask[]>(
    loadTasksFromLocalStorage().length > 0 ? loadTasksFromLocalStorage() : defaultTasks
  );

  const hasTask = computed(() => tasks.value.length > 0);

  const filteredTasks = computed(() => {
    const filtered = filterTasksByStatus(tasks.value, filterStatus.value);
    return sortTasksByDueDate(filtered, sortOrder.value);
  });

  watch(
    tasks,
    (newTasks) => {
      saveTasksToLocalStorage(newTasks);
    },
    { deep: true }
  );

  // const addNewTask = (task: {
  //   title: string;
  //   description: string;
  //   dueDate: string;
  // }): boolean => {
  //   try {
  //     const newTask: TTask = {
  //       id: uuidv4(),
  //       title: task.title,
  //       description: task.description,
  //       dueDate: task.dueDate,
  //       status: 'pending' as TTaskStatus
  //     };

  //     tasks.value.push(newTask);
  //     return true;
  //   } catch (error) {
  //     window.alert(error);
  //     return false;
  //   }
  // };

  // const editTask = (updatedTask: TTask): boolean => {
  //   try {
  //     const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
  //     tasks.value[index] = { ...tasks.value[index], ...updatedTask };

  //     return true;
  //   } catch (error) {
  //     window.alert(error);
  //     return false;
  //   }
  // };

  // const editTaskStatus = (id: string, status: TTaskStatus): void => {
  //   const task = tasks.value.find((task) => task.id === id);

  //   if (task) {
  //     task.status = status;
  //   }
  // };

  // const deleteTask = (id: string): boolean => {
  //   try {
  //     const initialLength = tasks.value.length;
  //     tasks.value = tasks.value.filter((task) => task.id !== id);

  //     if (tasks.value.length === initialLength) {
  //       window.alert(`Task with id ${id} not found.`);
  //     }
  //     return true;
  //   } catch (error) {
  //     window.alert(error);
  //     return false;
  //   }
  // };

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
    activeBoard,
    // addNewTask,
    currentTaskId,
    // deleteTask,
    // editTask,
    // editTaskStatus,
    filterStatus,
    filteredTasks,
    getTaskById,
    hasTask,
    showRightPanel,
    sortOrder,
    tasks
  };
});
