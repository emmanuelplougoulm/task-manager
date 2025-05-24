import { describe, expect, it } from 'vitest';
import { filterTasksByStatus, sortTasksByDueDate } from '@/utils/format';

import type { TTask } from '@/types';

const mockTasks: TTask[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description 1',
    dueDate: '2023-10-10',
    status: 'pending'
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description 2',
    dueDate: '2023-10-12',
    status: 'inProgress'
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description 3',
    dueDate: '2023-10-11',
    status: 'done'
  }
];

describe('filterTasksByStatus', () => {
  it('should return all tasks when status is "all"', () => {
    const result = filterTasksByStatus(mockTasks, 'all');
    expect(result).toEqual(mockTasks);
  });

  it('should filter tasks by status', () => {
    const result = filterTasksByStatus(mockTasks, 'pending');
    expect(result).toEqual([mockTasks[0]]);
  });

  it('should return an empty array when status is null', () => {
    const result = filterTasksByStatus(mockTasks, null);
    expect(result).toEqual([]);
  });
});

describe('sortTasksByDueDate', () => {
  it('should sort tasks by due date in ascending order', () => {
    const result = sortTasksByDueDate(mockTasks, 'asc');
    expect(result).toEqual([mockTasks[0], mockTasks[2], mockTasks[1]]);
  });

  it('should sort tasks by due date in descending order', () => {
    const result = sortTasksByDueDate(mockTasks, 'desc');
    expect(result).toEqual([mockTasks[1], mockTasks[2], mockTasks[0]]);
  });
});
