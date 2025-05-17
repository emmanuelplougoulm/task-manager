<template>
  <div class="dropdown" @click="toggleDropdown" @blur="closeDropdown">
    <div class="dropdown__input--selected">
      {{ selectedOption || placeholder }}
      <BaseIcon class="dropdown__option__icon" iconName="arrow-down" />
    </div>
    <div v-if="isOpen" class="dropdown__options">
      <div
        v-for="(option, index) in options"
        :key="index"
        :class="[`dropdown__option`]"
        @click.stop="selectOption(option.value)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue';
import { BaseIcon } from '@components/index';

type TDropdownProps = {
  options: { label: string; value: string }[];
  placeholder: string;
  modelValue: string;
};

const { options, modelValue } = defineProps<TDropdownProps>();
const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref(modelValue);

watch(
  () => modelValue,
  (val) => {
    selectedOption.value = val;
  }
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const selectOption = (value: string) => {
  selectedOption.value = value;
  emit('update:modelValue', value);
  isOpen.value = false;
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.dropdown {
  position: relative;
  max-width: 12.5rem;
  cursor: pointer;
  text-transform: capitalize;

  font-family: var(--font-family);
  font-size: var(--font-size-body);
}
.dropdown__input--selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  background-color: #ffffff;

  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;

  border: 0.0313rem solid #e5e5e5;
  box-shadow:
    0rem 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1),
    0rem 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1);

  font-weight: 500;

  font-size: var(--font-size-body);
  line-height: 1.25rem;
  color: #171717;
  text-wrap: nowrap;
}

.dropdown__options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  border: 0.0313rem solid #e5e5e5;
  box-shadow:
    0rem 0.0625rem 0.125rem -0.0625rem rgb(0 0 0 / 0.1),
    0rem 0.0625rem 0.1875rem 0 rgb(0 0 0 / 0.1);

  z-index: 100;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #171717;
  background-color: white;
}

.dropdown__option {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;
  cursor: pointer;
}

.dropdown__option:hover {
  background-color: #fafafa;
}

.dropdown__option__icon {
  width: 1.0417rem;
  height: 1.0417rem;
}
</style>
