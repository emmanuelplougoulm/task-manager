<template>
  <Teleport to="#modals">
    <div v-if="show">
      <div class="modal-backdrop" @click="$emit('close')"></div>
      <div class="modal-container">
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
defineProps({
  show: Boolean,
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(10, 10, 10, 0.698);
  z-index: 1000;
}

.modal-container {
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1001;
}
</style>
