<script setup lang="ts">
type THeaderInfoProps = {
  title: string;
  value: string;
};

defineProps<THeaderInfoProps>();
</script>

<template>
  <div class="header__info">
    <div class="header__info-title">{{ title }}</div>
    <div class="header__info-value">{{ value }}</div>
  </div>
</template>

<style scoped>
.header__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.header__info-title {
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  font-weight: 300;
  text-wrap: nowrap;
  line-height: 1.25rem;
}

.header__info-value {
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  text-wrap: nowrap;
  line-height: 1.25rem;
}

.header__spacer {
  flex-grow: 1;
}
</style>
