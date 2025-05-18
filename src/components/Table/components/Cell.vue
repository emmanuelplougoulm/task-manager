<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number]
  }
});
</script>

<template>
  <td>{{ value }}</td>
</template>

<style>
td {
  padding: 4px 8px;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: var(--font-size-body);
  color: var(--color-primary);
}
</style>
