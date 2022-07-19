import { createRouter, createWebHistory } from "vue-router";
import calculator from "../views/calculator.vue";
import login from "../views/login.vue";
import register from "../views/register.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "calculator",
      component: calculator,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    }
    
  ],
});

export default router;
