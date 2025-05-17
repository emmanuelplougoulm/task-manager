<template>
  <td>{{ value }}</td>
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number]
  }
});
</script>

<style>
td {
  padding: 4px 8px;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: var(--font-size-body);
  color: var(--color-primary);
}
</style>
