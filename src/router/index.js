/**
 * @file router.js
 * @description Defines the routes and creates a router instance for the Vue.js application.
 */

import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/components/common/Welcome.vue";
import Home from "../pages/Home.vue";
import Television from "../pages/Television.vue";
import Contact from "../pages/Contact.vue";
import Portfolio from "../pages/Portfolio.vue";

/**
 * @constant {Array} routes
 * @description An array of route objects specifying the path and corresponding component for each route.
 *
 * @property {string} path - The URL path of the route.
 * @property {Component} component - The component to be rendered when the route is accessed.
 */
const routes = [
  {
    path: "/",
    component: Welcome,
    props: {
      msg: "Welcome to Vue.js App exercises",
      myName: "By Mario David Riguera Castillo",
    },
  },
  { path: "/home", component: Home },
  { path: "/television", component: Television },
  { path: "/contact", component: Contact },
  { path: "/portfolio", component: Portfolio },
];

/**
 * @constant {Router} router
 * @description A router instance created using the createRouter function with HTML5 history mode.
 *
 * @property {History} history - The history mode for the router, using HTML5 history.
 * @property {Array} routes - The array of routes defined for the application.
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
