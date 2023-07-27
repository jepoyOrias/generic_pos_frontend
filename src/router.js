import { createWebHistory, createRouter } from "vue-router";

import LandingPage from "./pages/LandingPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import DashboardPage from "./pages/Dashboard/DashboardPage.vue";
import ProductPage from './pages/PiniaExample/ProductPage.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/", name: "LandingPage",component: LandingPage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/dashboard", name: "DashboardPage", component: DashboardPage },
  { path: "/pinia", name: "ProductPage", component: ProductPage },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
