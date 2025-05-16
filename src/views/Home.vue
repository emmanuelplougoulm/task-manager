<script setup lang="ts">
import { ref } from 'vue';
import { TaskTable, Board } from '@components/index';

const activeTab = ref(0);

const defaultTabs = [
  { title: 'Full list', content: TaskTable },
  { title: 'Board view', content: Board }
];

const setActiveTab = (index: number): void => {
  activeTab.value = index;
};
</script>

<template>
  <main>
    <header>
      <span>LOGO</span>
    </header>
    <div class="content">
      <div v-for="(tab, index) in defaultTabs" :key="index">
        <div @click="() => setActiveTab(index)">{{ tab.title }}</div>
      </div>

      <div>
        <component :is="defaultTabs[activeTab].content" />
      </div>
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
