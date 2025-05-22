export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  assigneeId?: string;
  sprintId?: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export type TTaskStatus = 'pending' | 'inProgress' | 'done';

export type TTask = {
  id: string;
  title: string;
  description: string;
  status: TTaskStatus;
  dueDate: string;
};

// export type TActionsProps = {
//   showTable: boolean;
// };

export type TListHeaderProps = {
  listName: string;
};

export type TCardProps = {
  title: string;
  description: string;
  dueDate: string;
  id: string;
};
