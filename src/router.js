
import { createWebHistory, createRouter } from "vue-router";



import { useAuthStore } from "./store/auth/AuthStore";
import LandingLayout from "./layout/LandingLayout.vue";
import AdminLayout from "./layout/AdminLayout.vue";
import LandingPage from "./pages/LandingPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import DashboardPage from "./pages/Dashboard/DashboardPage.vue";
import ProductPage from './pages/PiniaExample/ProductPage.vue';
import LoginPage from "./pages/Auth/LoginPage.vue";
import ContactusPage from "./pages/ContactusPage.vue";
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const routes = [
  {
    path: "/", 
    name: "LandingLayout",
    component: LandingLayout,
    children: [
      {
        path: '',
        component: LandingPage ,
      },
      {
        path: '/about',
        component: AboutPage ,
      },
    ]},
    {
      path: "/", 
      name: "AdminLayout",
      component: AdminLayout,
      meta:{ requiresAuth: true},
      children: [
        {
          path: '/pinia',
          component: ProductPage,
          meta: {role: 'admin' }
        },
        {
          path: '/dashboard',
          component: DashboardPage ,
          meta: {role: 'admin' }
        },
        {
          path: '/contact-us',
          component: ContactusPage ,
          meta: {role: 'admin' }
        },
    ]
  
  },
  {
    path: "/login", 
    name: "Login",
    component: LoginPage,
    meta:{ requiresAuth: false},
   
  }
];




// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});





// Navigation guard to check authentication and role-based access control
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const userRole = 'admin';
  const AuthStore  = useAuthStore();
  console.log(AuthStore);

  if (requiresAuth) {
    // Check if the user is authenticated (you should implement your authentication logic here)
    const isAuthenticated = true; // Replace this with your actual authentication check

    if (!isAuthenticated) {
      // Redirect to the login page or a page for unauthorized access
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      // Check if the user has the required role to access the route
      const requiredRole = to.meta.role;

      if (userRole === requiredRole) {
        // User has the required role, proceed to the requested route
        next();
      }
      else {
        // User does not have the required role, redirect to a page for unauthorized access
        next({ path: '/unauthorized' });
      }
    }
  } else {
    // Routes without authentication can be accessed by anyone
    next();
  }
});



export default router;
