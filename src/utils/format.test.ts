import { describe, it, expect } from 'vitest';
import { filterTasksByStatus, sortTasksByDueDate } from './format';

describe('filterTasksByStatus', () => {
  const tasks = [
    { id: '1', title: 'Task 1', status: 'todo', dueDate: '2025-05-20' },
    { id: '2', title: 'Task 2', status: 'done', dueDate: '2025-05-21' },
    { id: '3', title: 'Task 3', status: 'in-progress', dueDate: '2025-05-22' }
  ];

  it('should return all tasks if status is null', () => {
    expect(filterTasksByStatus(tasks, null)).toEqual(tasks);
  });

  it('should filter tasks by status', () => {
    expect(filterTasksByStatus(tasks, 'todo')).toEqual([
      { id: '1', title: 'Task 1', status: 'todo', dueDate: '2025-05-20' }
    ]);
    expect(filterTasksByStatus(tasks, 'done')).toEqual([
      { id: '2', title: 'Task 2', status: 'done', dueDate: '2025-05-21' }
    ]);
  });

  it('should return empty array if no tasks match status', () => {
    expect(filterTasksByStatus(tasks, 'non-existent')).toEqual([]);
  });
});

describe('sortTasksByDueDate', () => {
  const tasks = [
    { id: '1', title: 'Task 1', dueDate: '2025-05-20', status: 'todo' },
    { id: '2', title: 'Task 2', dueDate: '2025-05-22', status: 'done' },
    { id: '3', title: 'Task 3', dueDate: '2025-05-21', status: 'in-progress' }
  ];

  it('should sort tasks by dueDate ascending', () => {
    const sorted = sortTasksByDueDate(tasks, 'asc');
    expect(sorted.map((t) => t.id)).toEqual(['1', '3', '2']);
  });

  it('should sort tasks by dueDate descending', () => {
    const sorted = sortTasksByDueDate(tasks, 'desc');
    expect(sorted.map((t) => t.id)).toEqual(['2', '3', '1']);
  });

  it('should not modify the original array', () => {
    const original = [...tasks];
    sortTasksByDueDate(tasks, 'asc');
    expect(tasks).toEqual(original);
  });
});
