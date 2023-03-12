import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import Registration from "@/views/RegistrationView.vue";
import LovePeople from "@/views/LovePeopleview.vue";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: HomeView,
  },
  { name: "Home", path: "/", component: HomeView },
  { name: "Login", path: "/login", component: LoginView },
  { name: "LovePeople", path: "/lovePeople", component: LovePeople },
  { name: "Registration", path: "/registration", component: Registration },
  { name: "Explore", path: "/explore", component: HomeView },
  { name: "Profile", path: "/profile", component: HomeView },
  { name: "Signout", path: "/signout", component: HomeView },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
