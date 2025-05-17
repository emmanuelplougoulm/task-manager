<template>
  <div class="tabs">
    <div class="tabs__headers">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab"
        :class="['tabs__tab', { 'tabs__tab--active': idx === modelValue }]"
        @click="modelValue = idx"
      >
        {{ tab }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineModel } from 'vue';

defineProps<{
  tabs: string[];
}>();

const modelValue = defineModel<number>({ default: 0 });
</script>

<style scoped>
.tabs {
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  background-color: white;
}

.tabs__headers {
  display: flex;
}
.tabs__tab {
  background: none;
  border: none;
  outline: none;
  text-transform: capitalize;
  text-wrap: nowrap;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid transparent;
  transition:
    background 0.2s,
    border-bottom 0.2s,
    color 0.2s;
}
.tabs__tab:hover {
  background: var(--color-secondary-text);
}
.tabs__tab--active {
  color: var(--color-primary-text);
  border-bottom: 2px solid var(--color-primary-text);
  font-weight: 600;
  /* background: var(--color-secondary-bg); */
}
</style>
