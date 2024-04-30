import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      components: {
        default: () => import("@/views/dashboard.vue"),
        modules: () => import("@/views/modules.vue"),
      },
    },
    {
      path: "/console",
      name: "console",
      components: {
        default: () => import("@/views/console.vue"),
        modules: () => import("@/views/modules.vue"),
      },
    },
  ],
});

export default router;
