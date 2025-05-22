import type { TTaskStatus } from '@/types';

export const BOARD_LISTS: TTaskStatus[] = ['pending', 'inProgress', 'review', 'done'];

export const STATUSES = ['all', 'pending', 'inProgress', 'done'];

export const FILTER_OPTIONS = [
  { label: 'all', value: 'all' },
  { label: 'pending', value: 'pending' },
  { label: 'progress', value: 'inProgress' },
  { label: 'done', value: 'done' }
];
export const SORT_OPTIONS = [
  { label: 'asc', value: 'asc' },
  { label: 'desc', value: 'desc' }
];

export const TABLE_HEAD = ['title', 'description', 'status', 'due date', 'actions'];
export const ACTIONS_TABS = ['list view', 'board view'];

export const VIEWS = ['LIST', 'BOARD'];
