<script lang="ts" setup>
import type { TTextInputProps } from '@/custom-types/types';

const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

const text = defineModel<string>('text');
const { label } = defineProps<TTextInputProps>();
</script>

<template>
  <div class="input">
    <label class="input__label" for="inputId">{{ label }}</label>
    <div class="input__field">
      <input
        :id="inputId"
        placeholder="Type something"
        name="input"
        :class="[`input__input`, { error: error }]"
        :type="type"
        v-model="text"
        :aria-invalid="error ? 'true' : 'false'"
      />
    </div>
  </div>
</template>

<style>
/* VARIABLES */
:root {
  --color-border: #e5e5e5;
  --color-background: #fafafa;
  --color-placeholder: #737373;
  --color-placeholder-disabled: #a3a3a3;
  --color-border-disabled: #f5f5f5;
  --color-text: #171717;
  --color-label: #404040;
  --color-error: #d92d20;
  --color-focus: #444ce7;
  --color-focus-shadow: rgba(68, 76, 231, 0.12);
  --color-error-shadow: rgba(217, 45, 32, 0.12);
  --color-icon: #a3a3a3;
}

/* BASE STYLES */

* {
  box-sizing: border-box;
  margin: 0;
}

.input {
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* LABEL */

.input__label {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-label);
  text-transform: capitalize;
}

/* FIELD WRAPPER  */

.input__field {
  position: relative;
}

/* INPUT STYLES */

.input__input {
  width: 100%;
  padding: 0.5625rem 0.8125rem;
  padding-right: 2.3125rem;
  outline: none;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 4px;

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--color-text);
  width: 100%;
  transition: box-shadow 0.2s;
}

.input__input::placeholder {
  color: var(--color-placeholder);
}

/* FOCUS STATE */
.input__input:focus {
  box-shadow:
    0 0 0 1px var(--color-focus),
    0 1px 2px rgba(16, 24, 40, 0.05),
    0 0 0 4px var(--color-focus-shadow);
}

/* ERROR STATE */
.input__input.error {
  border: 1px red solid;
}

.input__input.error:focus {
  box-shadow:
    0 0 0 1px var(--color-error),
    0 0 0 4px var(--color-error-shadow);
}
</style>
