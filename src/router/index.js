import { createRouter, createWebHashHistory } from "vue-router";
//import Home from "../views/Home.vue";
//import Login from "../views/login/index.vue";

const routes = [
  {
    path: "/",
    redirect: "login",
    /*name: "Home",
    component: Home,
    */
  },
  {
    path: "/login",
    name: "login",
    //component: Login,
    component: () => import("../views/login/index.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
