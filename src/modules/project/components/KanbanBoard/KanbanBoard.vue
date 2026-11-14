<script setup lang="ts">
import TaskList from './TaskList.vue';
import { TASK_STATUSES } from '@constants/index';
</script>

<template>
  <div class="board">
    <TaskList v-for="status in TASK_STATUSES" :key="status" :status="status" />
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.75rem;
  padding-top: 0.75rem;
}
</style>
