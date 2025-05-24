<script setup lang="ts">
import TaskList from './TaskList.vue';
import { BOARD_LISTS } from '@constants/index';
</script>

<template>
  <div class="board">
    <TaskList v-for="(list, index) in BOARD_LISTS" :key="index" :listName="list" />
  </div>
</template>

<style scoped>
.board {
  /* border: 1px red solid; */
  /* border-radius: 0.5rem; */
  flex: 1 1 0;
  /* padding: 16px; */
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  /* overflow-x: scroll; */
}
</style>
