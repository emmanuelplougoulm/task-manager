import type { TBoard, TSortDirection, TStatusFilter, TTask, TTaskInput, TTaskStatus } from '@/types';
import { computed, ref, watch } from 'vue';
import { filterTasksByStatus, searchTasks, sortTasksByDueDate } from '@/utils/format';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from '@/utils/localStorage';

import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
  const tasks = ref<TTask[]>(loadTasksFromLocalStorage());

  const activeBoard = ref<TBoard>('table');
  const filterStatus = ref<TStatusFilter>('all');
  const sortOrder = ref<TSortDirection>('asc');
  const search = ref('');

  const hasTask = computed(() => tasks.value.length > 0);
  const doneCount = computed(() => tasks.value.filter((task) => task.status === 'done').length);

  const filteredTasks = computed(() => {
    const byStatus = filterTasksByStatus(tasks.value, filterStatus.value);
    return sortTasksByDueDate(searchTasks(byStatus, search.value), sortOrder.value);
  });

  watch(tasks, (newTasks) => saveTasksToLocalStorage(newTasks), { deep: true });

  const getTaskById = (id: string): TTask | undefined => tasks.value.find((task) => task.id === id);

  const addTask = (input: TTaskInput): TTask => {
    const task: TTask = {
      id: crypto.randomUUID(),
      title: input.title.trim(),
      description: input.description.trim(),
      dueDate: input.dueDate,
      status: 'pending'
    };
    tasks.value.push(task);
    return task;
  };

  const editTask = (id: string, changes: Partial<Omit<TTask, 'id'>>): boolean => {
    const task = getTaskById(id);
    if (!task) return false;
    Object.assign(task, changes, changes.title !== undefined ? { title: changes.title.trim() } : {});
    return true;
  };

  const setStatus = (id: string, status: TTaskStatus): boolean => editTask(id, { status });

  const deleteTask = (id: string): boolean => {
    const before = tasks.value.length;
    tasks.value = tasks.value.filter((task) => task.id !== id);
    return tasks.value.length < before;
  };

  return {
    tasks,
    activeBoard,
    filterStatus,
    sortOrder,
    search,
    hasTask,
    doneCount,
    filteredTasks,
    getTaskById,
    addTask,
    editTask,
    setStatus,
    deleteTask
  };
});
