import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: HomeView,
  },
  { name: "Home", path: "/", component: HomeView },
  { name: "Explore", path: "/explore", component: HomeView },
  { name: "Profile", path: "/profile", component: HomeView },
  { name: "Signout", path: "/signout", component: HomeView },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
