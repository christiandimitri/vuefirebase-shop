import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { fb } from "../firebase";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "overview",
        name: "overview",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Overview.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Products.vue"),
      },
      {
        path: "orders",
        name: "orders",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Orders.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // eslint-disable-next-line prettier/prettier
  routes
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
