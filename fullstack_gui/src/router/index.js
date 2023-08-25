import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/*webpackChuckName: "products" */ "../views/ProductsView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/*webpackChuckName: "contact" */ "../views/ContactView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/*webpackChuckName: "admin" */ "../views/AdminView.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(/*webpackChuckName: "admin" */ "../views/UserView.vue"),
  },
  {
    path: "/singleProduct",
    name: "singleProduct",
    component: () =>
      import(/*webpackChuckName: "admin" */ "../views/SingleProductView.vue"),
  },
  {
    path: "/addUser",
    name: "addUser",
    component: () =>
      import(/*webpackChuckName: "adduser" */ "../components/AddUserComp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
