import type { TSortDirection, TStatusFilter, TTask } from '@/types';

const filterTasksByStatus = (tasks: TTask[], status: TStatusFilter | string | null): TTask[] => {
  if (status === 'all') return tasks;
  return tasks.filter((task) => task.status === status);
};

const searchTasks = (tasks: TTask[], query: string): TTask[] => {
  const needle = query.trim().toLowerCase();
  if (!needle) return tasks;
  return tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(needle) ||
      task.description.toLowerCase().includes(needle)
  );
};

// Tasks without a due date always go last, whatever the direction.
const sortTasksByDueDate = (tasks: TTask[], order: TSortDirection): TTask[] => {
  return tasks.slice().sort((a, b) => {
    if (!a.dueDate || !b.dueDate) return Number(!a.dueDate) - Number(!b.dueDate);
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};

const formatDueDate = (date: string): string => {
  if (!date) return '—';
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export { filterTasksByStatus, searchTasks, sortTasksByDueDate, formatDueDate };
