import type { TTask } from '@/types';

const TASKS_STORAGE_KEY = 'tasks';

const saveTasksToLocalStorage = (tasks: TTask[]): void => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = (): TTask[] => {
  try {
    const data = localStorage.getItem(TASKS_STORAGE_KEY);
    const parsed = data ? JSON.parse(data) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export { saveTasksToLocalStorage, loadTasksFromLocalStorage, TASKS_STORAGE_KEY };
