<template>
  <button
    :type="type"
    :class="['button', `button--${variant}`]"
    :disabled="disabled"
    @click="onClick?.()"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
type TButtonProps = {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'ghost' | 'danger';
  disabled?: boolean;
};

const { type = 'button', variant = 'primary', disabled = false } = defineProps<TButtonProps>();
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
  
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  background-color: #7c5eea;
  color: white;

  padding: 8px 12px;
}

.button {
  cursor: pointer;
  transition: background-color 0.15s;
}

.button:hover {
  background-color: #6a4bd8;
}

.button--ghost {
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
}

.button--ghost:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.button--danger {
  background-color: #b3261e;
}

.button--danger:hover {
  background-color: #8c1d18;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:focus-visible {
  outline: 2px solid #c8b8ff;
  outline-offset: 2px;
}
</style>
