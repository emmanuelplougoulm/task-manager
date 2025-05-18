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

    <p v-if="hint" role="status" :class="[`input__hint`, { error: error }]">
      {{ hint }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;

type TTextInputProps = {
  label: string;
  hint?: string;
  error?: boolean;
  type: string;
};

const text = defineModel<string>('text');

const { label } = defineProps<TTextInputProps>();
</script>

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
  padding: 9px 13px;
  padding-right: 37px;
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
.input__input.error:focus {
  box-shadow:
    0 0 0 1px var(--color-error),
    0 0 0 4px var(--color-error-shadow);
}

/* DISABLED STATE */
.input__input:disabled {
  border: 1px solid var(--color-border-disabled);
  color: var(--color-placeholder-disabled);
  pointer-events: none;
}

.input__input:disabled::placeholder {
  color: var(--color-placeholder-disabled);
}

/*ICONS*/
.input__input--left-padding {
  padding-left: 41px;
}

.input__icon {
  width: 16px;
  height: 16px;
  position: absolute;
  pointer-events: none;
  color: var(--color-icon);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.input__icon--left {
  top: 12px;
  left: 14px;
}

.input__icon--right {
  top: 12px;
  right: 14px;
}

.input__icon--right.error {
  color: var(--color-error);
}

/*HINTS*/
.input__hint {
  font-size: 12px;
  color: var(--color-label);
}

.input__hint.error {
  color: var(--color-error);
}
</style>
