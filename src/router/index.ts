import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: HomeView,
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
