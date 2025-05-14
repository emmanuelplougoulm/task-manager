<script setup lang="ts">
import { ref } from 'vue'
import FullList from '@components/FullList/FullList.vue'
import Board from '@components/Board/Board.vue'

const activeTab = ref(0)

const defaultTabs = [
  { title: 'Full list', content: FullList },
  { title: 'Board view', content: Board },
]

const setActiveTab = (index: number): void => {
  activeTab.value = index
}
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
