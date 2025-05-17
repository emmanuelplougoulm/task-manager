<template>
  <button :class="[`button`]" @click="onClick" role="button">
    <div>
      {{ label }}
    </div>
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

type TButtonProps = {
  label: string;
  onClick: () => void;
};

defineProps<TButtonProps>();
</script>

<style>
button {
  all: unset;
}

.button {
  box-sizing: border-box;
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  font-size: var(--font-size-body);

  text-wrap: nowrap;
  text-transform: capitalize;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  background-color: var(--color-primary);
  color: white;

  padding: 8px 12px;
}

.button:hover {
  background-color: var(--color-secondary-bg);
}
</style>
