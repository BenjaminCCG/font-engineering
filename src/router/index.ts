import { Router, createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/home/index.vue';
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    }
  ]
});

export default router;
