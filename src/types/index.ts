export type TTaskStatus = 'pending' | 'inProgress' | 'done';

export type TTask = {
  id: string;
  title: string;
  description: string;
  status: TTaskStatus;
  dueDate: string;
};

export type TTaskInput = Pick<TTask, 'title' | 'description' | 'dueDate'>;

export type TSortDirection = 'asc' | 'desc';

export type TStatusFilter = TTaskStatus | 'all';

export type TBoard = 'table' | 'kanban';
