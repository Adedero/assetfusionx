import { createRouter, createWebHistory } from "vue-router";
import HomePage from "#src/app/pages/home-page.vue";

const router = createRouter({
  //@ts-expect-error import.meta.env
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0
      };
    }
  },
  routes: [
    {
      path: "/app",
      component: HomePage
    }
  ]
});

export default router;
