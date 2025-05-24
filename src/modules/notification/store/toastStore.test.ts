import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import { useToastStore } from './toastStore';

describe('useToastStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  it('should add a toast with show()', () => {
    const toastStore = useToastStore();
    toastStore.show('Hello', 'success');
    expect(toastStore.toasts.length).toBe(1);
    expect(toastStore.toasts[0]).toMatchObject({
      message: 'Hello',
      type: 'success',
      duration: 4000
    });
  });

  it('should delete a toast with remove()', () => {
    const toastStore = useToastStore();
    toastStore.show('To remove', 'error');
    const id = toastStore.toasts[0].id;
    toastStore.remove(id);
    expect(toastStore.toasts.length).toBe(0);
  });

  it('should delete all toasts with clear()', () => {
    const toastStore = useToastStore();
    toastStore.show('One', 'success');
    toastStore.show('Two', 'error');
    toastStore.clear();
    expect(toastStore.toasts.length).toBe(0);
  });
});
