<script setup lang="ts">
import { useProjectStore } from '../store/useProjectStore';
import { useCardPanel } from '@composables/useCardPanel';
import { Button } from '@/_UI/index';
import { PROJECT_BOARDS } from '@constants/index';

const projectStore = useProjectStore();
const { onOpenCreate } = useCardPanel();
</script>

<template>
  <div class="project-board-panel">
    <Button
      v-for="board in PROJECT_BOARDS"
      :label="board"
      :key="board"
      :onClick="() => (projectStore.activeBoard = board)"
    />
    <div class="project-board-panel__spacer"></div>
    <Button label="Create new task" :onClick="onOpenCreate" />
  </div>
</template>

<style>
.project-board-panel {
  background: transparent;
  border: 1px blue solid;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  height: 60px;
  /* padding: 20px; */
  border-bottom: 1px white solid;
}

.project-board-panel__spacer {
  flex-grow: 1;
}
</style>
