import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import type { TTaskStatus } from '@/types';
import { useTaskStore } from '@/stores/taskStore';

describe('Task Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should add a new task', () => {
    const taskStore = useTaskStore();
    const initialTaskCount = taskStore.tasks.length;

    const newTask = {
      title: 'New Task',
      description: 'Task Description',
      dueDate: '2023-10-10'
    };

    const result = taskStore.addNewTask(newTask);

    expect(result).toBe(true);
    expect(taskStore.tasks.length).toBe(initialTaskCount + 1);
    expect(taskStore.tasks[taskStore.tasks.length - 1].title).toBe('New Task');
  });

  it('should edit an existing task', () => {
    const taskStore = useTaskStore();
    const newTask = {
      title: 'Task to Edit',
      description: 'Description',
      dueDate: '2023-10-10'
    };

    taskStore.addNewTask(newTask);
    const taskId = taskStore.tasks[0].id;

    const updatedTask = {
      id: taskId,
      title: 'Updated Task',
      description: 'Updated Description',
      dueDate: '2023-10-11',
      status: 'IN_PROGRESS' as TTaskStatus
    };

    const result = taskStore.editTask(updatedTask);

    expect(result).toBe(true);
    expect(taskStore.tasks[0].title).toBe('Updated Task');
  });
});
