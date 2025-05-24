import { beforeEach, describe, expect, it, vi } from 'vitest';
import { loadTasksFromLocalStorage, saveTasksToLocalStorage } from './localStorage';

import type { TTask } from '@/types';

describe('LocalStorage Task Functions', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should save tasks to localStorage', () => {
    const tasks: TTask[] = [
      {
        id: '1',
        title: 'Test Task',
        description: 'Desc',
        dueDate: '2025-05-17',
        status: 'pending'
      }
    ];
    saveTasksToLocalStorage(tasks);
    const stored = localStorage.getItem('tasks');
    expect(stored).toBe(JSON.stringify(tasks));
  });

  it('should load tasks from localStorage when data exists', () => {
    const tasks = [
      {
        id: '1',
        title: 'Test Task',
        description: 'Desc',
        dueDate: '2025-05-17',
        status: 'todo'
      }
    ];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const loadedTasks = loadTasksFromLocalStorage();
    expect(loadedTasks).toEqual(tasks);
  });

  it('should return empty array when no data in localStorage', () => {
    localStorage.removeItem('tasks');
    const loadedTasks = loadTasksFromLocalStorage();
    expect(loadedTasks).toEqual([]);
  });
});
