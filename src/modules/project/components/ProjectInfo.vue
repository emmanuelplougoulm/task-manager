<script setup lang="ts">
interface ProjectInfoProps {
  title: string;
  value: string;
}

defineProps<ProjectInfoProps>();
</script>

<template>
  <div class="project-info">
    <div class="project-info__title">{{ title }}</div>
    <div class="project-info__value">{{ value }}</div>
  </div>
</template>

<style scoped>
.project-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.project-info__title {
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  text-wrap: nowrap;
  line-height: 1.25rem;
}

.project-info__value {
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  text-wrap: nowrap;
  line-height: 1.25rem;
}

.project-info__spacer {
  flex-grow: 1;
}
</style>
