<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { Button, TextInput } from '@/_UI/index';
import { STATUS_LABELS, TASK_STATUSES } from '@constants/index';
import type { TTask, TTaskStatus } from '@/types';

type TTaskFormValues = Pick<TTask, 'title' | 'description' | 'dueDate' | 'status'>;

const props = defineProps<{
  heading: string;
  submitLabel: string;
  initial?: TTaskFormValues;
  showStatus?: boolean;
}>();

const emit = defineEmits<{
  submit: [values: TTaskFormValues];
  cancel: [];
}>();

const empty = (): TTaskFormValues => ({ title: '', description: '', dueDate: '', status: 'pending' });

const values = reactive<TTaskFormValues>({ ...empty(), ...props.initial });
const submitted = ref(false);

watch(
  () => props.initial,
  (initial) => {
    Object.assign(values, empty(), initial);
    submitted.value = false;
  }
);

const titleError = computed(() =>
  submitted.value && !values.title.trim() ? 'Title is required' : ''
);

const onSubmit = () => {
  submitted.value = true;
  if (titleError.value) return;
  emit('submit', { ...values });
};
</script>

<template>
  <form class="task-form" novalidate @submit.prevent="onSubmit">
    <h2 class="task-form__heading">{{ heading }}</h2>
    <TextInput v-model:text="values.title" label="Title" :error="titleError" />
    <TextInput v-model:text="values.description" label="Description" />
    <TextInput v-model:text="values.dueDate" label="Due date" type="date" />

    <label v-if="showStatus" class="task-form__select">
      <span>Status</span>
      <select v-model="values.status">
        <option v-for="status in TASK_STATUSES" :key="status" :value="status as TTaskStatus">
          {{ STATUS_LABELS[status] }}
        </option>
      </select>
    </label>

    <div class="task-form__actions">
      <Button type="submit" :label="submitLabel" />
      <Button variant="ghost" label="Cancel" :onClick="() => emit('cancel')" />
      <slot name="extra-actions" />
    </div>
  </form>
</template>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  color: white;
}

.task-form__heading {
  font-size: 1.125rem;
  font-weight: 600;
}

.task-form__select {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
}

.task-form__select select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  font: inherit;
  font-weight: 400;
}

.task-form__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
