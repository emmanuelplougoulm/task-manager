import { VIEWS } from '@constants/index';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNavigationStore = defineStore('navigation', () => {
  const activeView = ref(VIEWS[0]);

  return { activeView };
});
