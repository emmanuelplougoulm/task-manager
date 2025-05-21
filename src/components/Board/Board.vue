<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import List from './components/List.vue';
import { BOARD_LISTS } from '@constants/index';
</script>

<template>
  <div class="board">
    <List v-for="(list, index) in BOARD_LISTS" :key="index" :listName="list" />
  </div>
</template>

<style scoped>
.board {
  border: 1px blue solid;
  border-radius: 0.5rem;
  height: 100%;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  overflow-x: scroll;
}
</style>
