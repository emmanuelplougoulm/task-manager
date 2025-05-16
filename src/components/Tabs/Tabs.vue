<template>
  <div class="tabs">
    <div class="tabs__headers">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab"
        :class="['tabs__tab', { 'tabs__tab--active': idx === activeTab }]"
        @click="activeTab = idx"
      >
        {{ tab }}
      </button>
    </div>
    <div class="tabs__content">
      <slot :name="`tab-${activeTab}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps<{
  tabs: string[];
}>();

const activeTab = ref(0);
</script>

<style scoped>
.tabs {
  font-family: var(--font-family);
  background-color: white;
  height: 100%;
}

.tabs__headers {
  display: flex;
  border-bottom: 2px solid #e5e7eb;
}
.tabs__tab {
  background: none;
  border: none;
  outline: none;
  text-transform: capitalize;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  color: #374151;
  border-bottom: 2px solid transparent;
  transition:
    background 0.2s,
    border-bottom 0.2s,
    color 0.2s;
}
.tabs__tab:hover {
  background: rgb(229, 227, 227);
}
.tabs__tab--active {
  color: var(--color-primary-text);
  border-bottom: 2px solid var(--color-primary-text);
  font-weight: 600;
  background: var(--color-secondary-bg);
}
.tabs__content {
  padding: 24px 0 0 0;
}
</style>
