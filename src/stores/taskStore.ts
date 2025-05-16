import { ref, computed, watch } from 'vue';
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';
import type { TTask, TTaskStatus } from '@/custom-types/types';

const TASKS_STORAGE_KEY: string = 'tasks';

function saveTasksToLocalStorage(tasks: TTask[]) {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasksFromLocalStorage(): TTask[] {
  const data = localStorage.getItem(TASKS_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

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
  const tasks = ref<TTask[]>(
    loadTasksFromLocalStorage().length > 0 ? loadTasksFromLocalStorage() : defaultTasks
  );

  const hasTask = computed(() => tasks.value.length > 0);

  watch(
    tasks,
    (newTasks) => {
      saveTasksToLocalStorage(newTasks);
    },
    { deep: true }
  );

  function addNewTask(task: { title: string; description: string; dueDate: string }) {
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
  }

  function editTask(updatedTask: TTask) {
    try {
      const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
      tasks.value[index] = { ...tasks.value[index], ...updatedTask };

      return true;
    } catch (error) {
      window.alert(error);
      return false;
    }
  }

  function deleteTask(id: string) {
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
  }

  function getTaskById(id: string): TTask | undefined {
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
  }

  return {
    tasks,
    hasTask,
    addNewTask,
    deleteTask,
    getTaskById,
    editTask
  };
});
