<script setup lang="ts">
import { computed } from 'vue';
import ProjectInfoPanel from '../components/ProjectInfoPanel.vue';
import ProjectBoardPanel from '../components/ProjectBoardPanel.vue';
import ProjectFilterPanel from '../components/ProjectFilterPanel.vue';
import TableBoard from '../components/TableBoard/TableBoard.vue';
import KanbanBoard from '../components/KanbanBoard/KanbanBoard.vue';

import CreateTaskCard from '../components/Cards/CreateTaskCard.vue';
import EditTaskCard from '../components/Cards//EditTaskCard.vue';

import { useCardPanel } from '@composables/useCardPanel';

import { useProjectStore } from '../store/useProjectStore';
import { useUIStore } from '@stores/useUIStore';

const { closePanel } = useCardPanel();

const projectStore = useProjectStore();
const uiStore = useUIStore();

const showTable = computed(() => projectStore.activeBoard === 'TABLE_BOARD');
</script>

<template>
  <main class="project-page">
    <ProjectInfoPanel />
    <div class="project-page__content">
      <div class="project-page__left-panel">
        <ProjectBoardPanel />
        <ProjectFilterPanel />

        <TableBoard v-if="showTable" :has-task="true" />
        <KanbanBoard v-else />
      </div>
      <div class="project-page__right-panel" :class="[{ show: uiStore.rightPanel.open }]">
        <CreateTaskCard
          :show="uiStore.rightPanel.mode == 'create'"
          :cancel="closePanel"
        />

        <EditTaskCard :show="uiStore.rightPanel.mode == 'edit'" />
      </div>
    </div>
  </main>
</template>

<style>
.project-page {
  border: 1px red solid;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
}

.project-page__content {
  display: flex;
  gap: 5px;
  height: 100%;
}

.project-page__left-panel {
  padding: 12px;
  flex-grow: 1;
  height: 100%;
  border-radius: 8px;
  background-color: var(--glassmorphism-panel-bg);
}

.project-page__right-panel {
  width: 0;
  background-color: var(--glassmorphism-panel-bg);
  opacity: 0;
  transition:
    width 0.2s,
    opacity 0.2s;
}

.project-page__right-panel.show {
  width: 300px;
  opacity: 1;
}
</style>
