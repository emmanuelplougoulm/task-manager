<script setup lang="ts">
import { useProjectStore } from '../store/useProjectStore';
import { useCardPanel } from '@composables/useCardPanel';
import { Button } from '@/_UI/index';
import { BOARDS } from '@constants/index';

const projectStore = useProjectStore();
const { onOpenCreate } = useCardPanel();
</script>

<template>
  <div class="project-board-panel">
    <div class="project-board-panel__views" role="group" aria-label="View">
      <button
        v-for="board in BOARDS"
        :key="board.value"
        type="button"
        :class="['project-board-panel__view', { active: projectStore.activeBoard === board.value }]"
        :aria-pressed="projectStore.activeBoard === board.value"
        @click="projectStore.activeBoard = board.value"
      >
        {{ board.label }}
      </button>
    </div>
    <div class="project-board-panel__spacer"></div>
    <Button label="New task" :onClick="onOpenCreate" />
  </div>
</template>

<style scoped>
.project-board-panel {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

.project-board-panel__views {
  display: flex;
  gap: 0.25rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 3px;
}

.project-board-panel__view {
  padding: 6px 14px;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

.project-board-panel__view.active {
  background: #7c5eea;
  font-weight: 600;
}

.project-board-panel__spacer {
  flex-grow: 1;
}
</style>
