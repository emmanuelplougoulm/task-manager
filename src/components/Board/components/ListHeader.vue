<script setup lang="ts">
import type { TListHeaderProps } from '@/custom-types/types';

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
  margin-bottom: 0.625rem;
  color: white;
}

.list-name {
  text-align: left;
  font-size: var(--font-size-body);
  font-weight: 800;
}
</style>
