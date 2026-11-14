<script setup lang="ts">
defineProps<{ filtered: boolean }>();
</script>

<template>
  <div class="empty-state" role="status">
    <template v-if="filtered">
      <p class="empty-state__title">No task matches your filters</p>
      <p>Try another status or search term.</p>
    </template>
    <template v-else>
      <p class="empty-state__title">No task yet</p>
      <p>Create your first task with the “New task” button.</p>
    </template>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 3rem 1rem;
  border: 1px dashed rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  color: white;
  text-align: center;
}

.empty-state__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
