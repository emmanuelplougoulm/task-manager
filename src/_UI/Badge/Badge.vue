<template>
  <span role="status" :aria-label="label" :class="['badge', `badge--color-${color}`]">
    {{ label }}
  </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

type TBadgeProps = {
  color: 'success' | 'error' | 'pending' | 'inProgress' | 'done' | 'neutral';
  label: string;
};

defineProps<TBadgeProps>();
</script>

<style scoped>
.badge {
  box-sizing: border-box;
  font-family: var(--font-family);
  display: inline-block;
  font-weight: 400;
  text-align: center;
  align-content: center;
  border-radius: 624.9375rem;
  border-width: 1px;
  border-style: solid;
  width: fit-content;

  /* Cross platform rules */
  -webkit-border-radius: 624.9375rem;
  -moz-border-radius: 624.9375rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  line-height: 1rem;
}

.badge--color-neutral,
.badge--color-todo {
  background-color: #f9fafb;
  color: #525252;
  border-color: #e6e6e6;
}
.badge--color-inProgress {
  background-color: #fffbeb;
  color: #b45309;
  border-color: #fde68a;
}
.badge--color-success,
.badge--color-done {
  background-color: #f0fdf4;
  color: #15803d;
  border-color: #bbf7d0;
}
.badge--color-error {
  background-color: #fef2f2;
  color: #dc2626;
  border-color: #fecaca;
}
</style>
