<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import {
  Table,
  Board,
  Header,
  Actions
} from '@components/index';
import ViewsPanel from '@components/ViewsPanel/ViewsPanel.vue';
import FilterPanel from '@components/FilterPanel/FilterPanel.vue';
import CardDetails from '@components/CardDetails/CardDetails.vue';
import { useTaskStore } from '@/stores';
// import { useViewportWidth } from '@composables/index';

const taskStore = useTaskStore();
const { hasTask, filteredTasks } = toRefs(taskStore);

const activeTab = ref(0);
const showTable = computed(() => activeTab.value === 0);

// const activeTab = ref(0);

const isCardOpen = ref(false);

// const { width } = useViewportWidth();
// const isReadable = computed(() => width.value > 400);
</script>

<template>
  <main class="home">
    <Header />
    <!-- <div class="home__content">
      <div class="home__left-panel">
        <ViewsPanel />
        <FilterPanel />
        <Table
          v-if="showTable"
          :hasTask="hasTask"
          :filteredTasks="filteredTasks"
        />
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
  flex-grow: 1;
  background-color: white;
  border-radius: 8px;
}

.home__right-panel {
  /* width: 300px; */
  /* border: 1px red solid; */
}

.home__warning_message {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--color-secondary-bg);
  height: 100%;
}

.home__warning_message p {
  text-align: center;
  font-family: var(--font-family);
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 600;
}
</style>
