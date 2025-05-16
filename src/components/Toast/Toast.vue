<template>
  <transition-group name="toast" tag="div" class="toast-container">
    <div v-for="toast in toasts" :key="toast.id" class="toast">
      <div :class="[`toast__content`, `toast__content--${toast.type}`]">
        <div class="toast__content__badge">
          {{ toast.type }}
        </div>
        <div>{{ toast.message }}</div>
        <button class="toast__close" @click="remove(toast.id)">×</button>
      </div>
    </div>
  </transition-group>
</template>

<script setup lang="ts">
import { useToastStore } from '@stores/index';
import { storeToRefs } from 'pinia';

const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
const { remove } = toastStore;
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.toast__close {
  margin-left: 12px;
  padding: 0 6px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
  opacity: 0.7;
}

.toast__close:hover {
  opacity: 1;
}
</style>
