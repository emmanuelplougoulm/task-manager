import { defineStore } from 'pinia';
import { ref } from 'vue';

export type ToastType = 'success' | 'error';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration?: number;
}

let nextId = 1;

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([]);

  function show(message: string, type: ToastType, duration = 4000): void {
    const id = nextId++;
    toasts.value.push({ id, message, type, duration });
    setTimeout(() => remove(id), duration);
  }

  function remove(id: number): void {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  }

  function clear(): void {
    toasts.value = [];
  }

  return { toasts, show, remove, clear };
});
