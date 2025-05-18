<script setup lang="ts">
import { TaskTable, Board, Tabs } from '@components/index';
import Logo from '@assets/mangopay__logo.png';

const taskStore = useTaskStore();
const { hasTask, filterStatus, filteredTasks, sortOrder } = toRefs(taskStore);
];

const setActiveTab = (index: number): void => {
  activeTab.value = index;
};
</script>

<template>
      <Actions v-model="activeTab" :showTable="showTable" />
      <Table v-if="showTable" :hasTask="hasTask" :filteredTasks="filteredTasks" />
    </div>
  </main>
</template>

<style scoped>
main {
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px red solid;
}

header {
  border: 1px violet solid;
  height: 50px;
}

.content {
  background-color: lightgrey;
  height: 100%;
  padding: 2rem;
}
</style>
