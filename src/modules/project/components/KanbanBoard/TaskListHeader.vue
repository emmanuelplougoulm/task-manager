<script setup lang="ts">
import type { TListHeaderProps } from '@/types';

const props = defineProps<TListHeaderProps>();
const { listName } = props;
</script>

<template>
  <div class="list-header">
    <div class="list-name">{{ listName }}</div>
  </div>
</template>

<style scoped>
.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.625rem;
  color: white;
  background-color: var(--glassmorphism-panel-bg);
  border-radius: 4px;
  height: 40px;
  padding-left: 10px;
}

.list-name {
  text-align: left;
  font-size: var(--font-size-body);
  font-weight: 600;
}
</style>
