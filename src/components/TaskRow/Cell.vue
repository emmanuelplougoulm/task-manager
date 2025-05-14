<template>
  <td>{{ value }}</td>
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: [String, Number],
  },
})
</script>

<style>
td {
  border: 1px black solid;
  flex-grow: 1;
}
</style>
