<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useToastStore } from '@stores/index';
import { Badge } from '@/_UI/index';
import { storeToRefs } from 'pinia';

const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
const { remove } = toastStore;
</script>

<template>
  <transition-group name="toast" tag="div" class="toast-container">
    <div v-for="toast in toasts" :key="toast.id" class="toast">
      <div :class="[`toast__content`, `toast__content--${toast.type}`]">
        <div class="toast__content__badge">
          <Badge :label="toast.type" :color="toast.type" />
        </div>
        <div>{{ toast.message }}</div>
        <button class="toast__close" @click="remove(toast.id)">×</button>
      </div>
    </div>
  </transition-group>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-1.25rem);
}

.toast-container {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-family: var(--font-family);
}

.toast__content {
  display: flex;
  gap: 4px;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.625rem 0.875rem;
}

.toast__content--success {
  color: green;
  font-weight: 600;
}

.toast__close {
  margin-left: 0.75rem;
  padding: 0 0.375rem;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.125rem;
  opacity: 0.7;
}

.toast__close:hover {
  opacity: 1;
}
</style>
