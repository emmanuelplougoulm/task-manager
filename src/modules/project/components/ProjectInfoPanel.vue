<script setup lang="ts">
import { computed } from 'vue';
import { useProjectStore } from '../store/useProjectStore';

const projectStore = useProjectStore();

const today = new Date().toLocaleDateString('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
});

const stats = computed(() => [
  { title: 'Today', value: today },
  { title: 'Tasks', value: String(projectStore.tasks.length) },
  { title: 'Done', value: `${projectStore.doneCount} / ${projectStore.tasks.length}` }
]);
</script>

<template>
  <header class="project-info-panel">
    <h1 class="project-info-panel__title">Task Manager</h1>
    <dl class="project-info-panel__stats">
      <div v-for="stat in stats" :key="stat.title" class="project-info-panel__stat">
        <dt>{{ stat.title }}</dt>
        <dd :data-testid="`stat-${stat.title.toLowerCase()}`">{{ stat.value }}</dd>
      </div>
    </dl>
  </header>
</template>

<style scoped>
.project-info-panel {
  padding: 1rem 1.25rem;
  background-color: var(--glassmorphism-panel-bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  border-radius: 8px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.project-info-panel__title {
  font-size: 1.5rem;
  font-weight: 700;
}

.project-info-panel__stats {
  display: flex;
  gap: 2rem;
  margin: 0;
}

.project-info-panel__stat dt {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.project-info-panel__stat dd {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 700;
}
</style>
