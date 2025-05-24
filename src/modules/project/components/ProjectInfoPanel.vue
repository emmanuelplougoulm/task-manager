<script setup lang="ts">
import ProjectInfo from './ProjectInfo.vue';
import { Button } from '@/_UI/index';
</script>

<template>
  <div class="project-info-panel">
    <!-- TODO: should this be in an iterable config file ?  -->
    <ProjectInfo title="Today's date" value="21 May 2025" />
    <ProjectInfo title="People on project" value="Lebron" />

    <div class="project-info-panel__spacer"></div>
    <Button
      class="project-info-panel__button"
      label="Add new task"
      :onClick="() => (showAddModal = true)"
    />
  </div>
</template>

<style scoped>
.project-info-panel {
  /* border: 1px red solid; */
  padding: 1rem;
  background-color: var(--glassmorphism-panel-bg);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 8px;
  height: 80px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-info-panel__spacer {
  flex-grow: 1;
}

/* @media only screen and (max-width: 600px) {
  .home__header {
    flex-direction: column;
    gap: 0.25rem;
  }
}

@media only screen and (min-width: 601px) and (max-width: 991px) {
  .home__header {
    flex-direction: column;
    gap: 0.25rem;
  }
} */
</style>
