import { createRouter, createWebHistory } from 'vue-router';

// import HomeView from '../views/Home.vue'
import ProjectPage from '@/modules/project/pages/ProjectPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'project',
      component: ProjectPage
    }
  ]
});

export default router;
