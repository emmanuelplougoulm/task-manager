import type { TTask } from '@/custom-types/types';

const TASKS_STORAGE_KEY: string = 'tasks';

const saveTasksToLocalStorage = (tasks: TTask[]): void => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = (): TTask[] => {
  const data = localStorage.getItem(TASKS_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export { saveTasksToLocalStorage, loadTasksFromLocalStorage };
