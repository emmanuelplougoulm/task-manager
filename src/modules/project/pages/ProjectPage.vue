<script setup lang="ts">
import { computed } from 'vue';
import ProjectInfoPanel from '../components/ProjectInfoPanel.vue';
import ProjectBoardPanel from '../components/ProjectBoardPanel.vue';
import ProjectFilterPanel from '../components/ProjectFilterPanel.vue';
import TableBoard from '../components/TableBoard/TableBoard.vue';
import KanbanBoard from '../components/KanbanBoard/KanbanBoard.vue';
import CreateTaskCard from '../components/Cards/CreateTaskCard.vue';
import EditTaskCard from '../components/Cards/EditTaskCard.vue';

import { useProjectStore } from '../store/useProjectStore';
import { useUIStore } from '@stores/useUIStore';

const projectStore = useProjectStore();
const uiStore = useUIStore();

const showTable = computed(() => projectStore.activeBoard === 'table');
</script>

<template>
  <main class="project-page">
    <ProjectInfoPanel />
    <div class="project-page__content">
      <div class="project-page__left-panel">
        <ProjectBoardPanel />
        <ProjectFilterPanel />
        <TableBoard v-if="showTable" />
        <KanbanBoard v-else />
      </div>
      <aside
        v-if="uiStore.rightPanel.open"
        class="project-page__right-panel"
        aria-label="Task details"
      >
        <CreateTaskCard v-if="uiStore.rightPanel.mode === 'create'" />
        <EditTaskCard v-else-if="uiStore.rightPanel.mode === 'edit'" />
      </aside>
    </div>
  </main>
</template>

<style scoped>
.project-page {
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 100%;
}

.project-page__content {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.project-page__left-panel {
  padding: 1rem;
  flex-grow: 1;
  min-width: 0;
  border-radius: 8px;
  background-color: var(--glassmorphism-panel-bg);
}

.project-page__right-panel {
  width: 320px;
  flex-shrink: 0;
  border-radius: 8px;
  background-color: var(--glassmorphism-panel-bg);
}

@media (max-width: 900px) {
  .project-page__content {
    flex-direction: column-reverse;
    align-items: stretch;
  }

  .project-page__right-panel {
    width: 100%;
  }
}
</style>
