<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
// type TCardDetailProps = {
//   show: boolean;
// };

const show = ref(false);

// defineProps<TCardDetailProps>();
</script>

<template>
  <div :class="['card-details', { show: show }]">
    <div @click="() => (show = !show)">toggle</div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.card-details {
  width: 100px;
  opacity: 1;
  overflow: hidden;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  transition:
    width 0.2s,
    opacity 0.2s;
}

.card-details.show {
  width: 300px;
  opacity: 1;
}
</style>
