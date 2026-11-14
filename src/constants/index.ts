import type { TBoard, TSortDirection, TStatusFilter, TTaskStatus } from '@/types';

export const TASK_STATUSES: TTaskStatus[] = ['pending', 'inProgress', 'done'];

export const STATUS_LABELS: Record<TTaskStatus, string> = {
  pending: 'To do',
  inProgress: 'In progress',
  done: 'Done'
};

export const FILTER_OPTIONS: { label: string; value: TStatusFilter }[] = [
  { label: 'All statuses', value: 'all' },
  ...TASK_STATUSES.map((status) => ({ label: STATUS_LABELS[status], value: status }))
];

export const SORT_OPTIONS: { label: string; value: TSortDirection }[] = [
  { label: 'Due date ↑', value: 'asc' },
  { label: 'Due date ↓', value: 'desc' }
];

export const TABLE_HEAD = ['Title', 'Description', 'Status', 'Due date', 'Actions'];

export const BOARDS: { label: string; value: TBoard }[] = [
  { label: 'Table', value: 'table' },
  { label: 'Board', value: 'kanban' }
];
