import type { TSortDirection, TTask } from '@/types';

const filterTasksByStatus = (tasks: TTask[], status: string | null): TTask[] => {
  if (status === 'all') return tasks;
  return tasks.filter((task) => task.status === status);
};

const sortTasksByDueDate = (tasks: TTask[], order: TSortDirection): TTask[] => {
  return tasks.slice().sort((a, b) => {
    const dateA = new Date(a.dueDate).getTime();
    const dateB = new Date(b.dueDate).getTime();
    return order === 'asc' ? dateA - dateB : dateB - dateA;
  });
};

export { filterTasksByStatus, sortTasksByDueDate };
