<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import { Header, Table, Board, CardDetails } from '@/_UI/index';
import ViewsPanel from '@components/ViewsPanel/ViewsPanel.vue';
import FilterPanel from '@components/FilterPanel/FilterPanel.vue';
// import CardDetails from '@components/CardDetails/CardDetails.vue';
import { useTaskStore, useNavigationStore } from '@/stores';
// import { useViewportWidth } from '@composables/index';

const taskStore = useTaskStore();
const { hasTask, filteredTasks } = toRefs(taskStore);

const navigationStore = useNavigationStore();
const showTable = computed(() => navigationStore.activeView === 'LIST');
// console.log('navigationStore', navigationStore);

// const activeTab = ref(0);

// const isCardOpen = ref(false);
const isCardOpen = computed(() => taskStore.currentTaskId);

// const { width } = useViewportWidth();
// const isReadable = computed(() => width.value > 400);
</script>

<template>
  <main class="home">
    <Header />
    <div class="home__content">
      <div class="home__left-panel">
        <ViewsPanel />
        <FilterPanel />
        <Table v-if="showTable" :hasTask="hasTask" :filteredTasks="filteredTasks" />
        <Board v-else />
      </div>
      <div class="home__right-panel">
        <CardDetails :show="isCardOpen" />
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.home {
  /* border: 1px red solid; */
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.home__content {
  display: flex;
  gap: 5px;
  height: 100%;
}

.home__left-panel {
  padding: 12px;
  flex-grow: 1;
  height: 100%;
  border-radius: 8px;
  background-color: var(--glassmorphism-panel-bg);
}

.home__right-panel {
  /* width: 300px; */
  /* border: 1px red solid; */
  background-color: var(--glassmorphism-panel-bg);
}

/* .home__warning_message {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--color-secondary-bg);
  height: 100%;
} */

/* .home__warning_message p {
  text-align: center;
  font-family: var(--font-family);
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 600;
} */
</style>
