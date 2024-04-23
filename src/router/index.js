import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/layout/index.vue";

const modulesFiles = require.context("./modules", false, /\.js$/);
const modules = [];
modulesFiles.keys().forEach((key) => {
  modules.push(modulesFiles(key).default || modulesFiles(key));
});

export const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: modules,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
