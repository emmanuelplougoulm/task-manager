import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { nextTick } from 'vue';

import { useProjectStore } from './useProjectStore';
import { TASKS_STORAGE_KEY } from '@/utils/localStorage';

const input = (title: string, dueDate = '') => ({ title, description: '', dueDate });

describe('useProjectStore', () => {
  beforeEach(() => {
    localStorage.clear();
    setActivePinia(createPinia());
  });

  it('starts empty when nothing is stored', () => {
    const store = useProjectStore();
    expect(store.tasks).toEqual([]);
    expect(store.hasTask).toBe(false);
  });

  it('adds a pending task with a trimmed title and a unique id', () => {
    const store = useProjectStore();
    const a = store.addTask(input('  Write tests  '));
    const b = store.addTask(input('Ship'));

    expect(a).toMatchObject({ title: 'Write tests', status: 'pending' });
    expect(a.id).not.toBe(b.id);
    expect(store.tasks).toHaveLength(2);
  });

  it('edits a task and reports unknown ids', () => {
    const store = useProjectStore();
    const task = store.addTask(input('Draft'));

    expect(store.editTask(task.id, { title: 'Final', status: 'done' })).toBe(true);
    expect(store.getTaskById(task.id)).toMatchObject({ title: 'Final', status: 'done' });
    expect(store.editTask('missing', { title: 'x' })).toBe(false);
  });

  it('moves a task to another status', () => {
    const store = useProjectStore();
    const task = store.addTask(input('Review'));

    store.setStatus(task.id, 'inProgress');
    expect(store.getTaskById(task.id)?.status).toBe('inProgress');
  });

  it('deletes a task', () => {
    const store = useProjectStore();
    const task = store.addTask(input('Temp'));

    expect(store.deleteTask(task.id)).toBe(true);
    expect(store.deleteTask(task.id)).toBe(false);
    expect(store.tasks).toHaveLength(0);
  });

  it('filters by status, searches and sorts by due date', () => {
    const store = useProjectStore();
    const late = store.addTask(input('Release notes', '2025-03-01'));
    store.addTask(input('Bug triage', '2025-01-01'));
    store.addTask(input('No date'));
    store.setStatus(late.id, 'done');

    expect(store.filteredTasks.map((t) => t.title)).toEqual(['Bug triage', 'Release notes', 'No date']);

    store.sortOrder = 'desc';
    expect(store.filteredTasks.map((t) => t.title)).toEqual(['Release notes', 'Bug triage', 'No date']);

    store.filterStatus = 'done';
    expect(store.filteredTasks.map((t) => t.title)).toEqual(['Release notes']);

    store.filterStatus = 'all';
    store.search = 'TRIAGE';
    expect(store.filteredTasks.map((t) => t.title)).toEqual(['Bug triage']);
  });

  it('persists tasks to localStorage and restores them', async () => {
    const store = useProjectStore();
    store.addTask(input('Persist me'));
    await nextTick();

    expect(JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) ?? '[]')).toHaveLength(1);

    setActivePinia(createPinia());
    expect(useProjectStore().tasks[0]?.title).toBe('Persist me');
  });
});
