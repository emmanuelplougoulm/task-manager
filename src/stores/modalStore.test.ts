import { beforeEach, describe, expect, it } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import { useModalStore } from './modalStore'; // Ajuste le chemin si besoin

describe('useModalStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should initialize with default values', () => {
    const modalStore = useModalStore();
    expect(modalStore.showAddModal).toBe(false);
    expect(modalStore.showEditModal).toBe(false);
    expect(modalStore.currentTaskId).toBe('');
  });

  it('should open edit modal and set currentTaskId', () => {
    const modalStore = useModalStore();
    modalStore.openEditModal('123');
    expect(modalStore.showEditModal).toBe(true);
    expect(modalStore.currentTaskId).toBe('123');
  });

  it('should allow toggling showAddModal', () => {
    const modalStore = useModalStore();
    modalStore.showAddModal = true;
    expect(modalStore.showAddModal).toBe(true);
    modalStore.showAddModal = false;
    expect(modalStore.showAddModal).toBe(false);
  });

  it('should allow toggling showEditModal', () => {
    const modalStore = useModalStore();
    modalStore.showEditModal = true;
    expect(modalStore.showEditModal).toBe(true);
    modalStore.showEditModal = false;
    expect(modalStore.showEditModal).toBe(false);
  });
});
