<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, computed, toRefs } from 'vue';
import { Table, Board, Header, Actions } from '@components/index';
import { useTaskStore } from '@/stores';
import { useViewportWidth } from '@composables/index';

const taskStore = useTaskStore();
const { hasTask, filteredTasks } = toRefs(taskStore);

const activeTab = ref(0);
const showTable = computed(() => activeTab.value === 0);

const { width } = useViewportWidth();
const isReadable = computed(() => width.value > 400);
</script>

<template>
  <main class="home">
    <Header title="Welcome to task master by" />
    <div v-if="isReadable" class="home__content">
      <Actions v-model="activeTab" :showTable="showTable" />
      <Table v-if="showTable" :hasTask="hasTask" :filteredTasks="filteredTasks" />
      <Board v-else />
    </div>
    <div class="home__warning_message" v-else>
      <p>
        Oh snap ! It looks like you're screen is very small<br />We recommend you switch
        to desktop
      </p>
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
  gap: 30px;
  height: 100%;
}

.home__content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  border-radius: 8px;

  padding: 10px;
  height: 100%;
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
