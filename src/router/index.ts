import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "@/views/dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
    },
    {
      path: "/database",
      name: "database",
      component: () => import("@/views/database.vue"),
    },
    {
      path: "/analytics",
      name: "analytics",
      component: () => import("@/views/analytics.vue"),
    },
  ],
});

export default router;
