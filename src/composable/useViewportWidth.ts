import { ref, onMounted, onUnmounted } from 'vue';

export const useViewportWidth = () => {
  const width = ref(window.innerWidth);

  function updateWidth() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });

  return { width };
};
