<script setup lang="ts">
import { toRefs } from 'vue';
import { Toast, EditModal, AddModal } from '@/_UI/index';
import { useModalStore } from '@stores/index';

const modalStore = useModalStore();
const { showAddModal, showEditModal } = toRefs(modalStore);
</script>

<template>
  <AddModal :show="showAddModal" />
  <EditModal :show="showEditModal" />

  <Toast />
  <RouterView />
</template>
