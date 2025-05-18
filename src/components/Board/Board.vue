<template>
  <div class="board">
    <List v-for="(list, index) in BOARD_LISTS" :key="index" :listName="list" />
  </div>
</template>

<script setup lang="ts">
import List from './components/List.vue';
import { BOARD_LISTS } from '@constants/index';
</script>

<style scoped>
.board {
  background-color: transparent;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
