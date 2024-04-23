import {DASHBOARD_PAGE, LOGIN_PAGE, REGISTER_PAGE} from "@/router/names"
import authMiddleware from "@/router/middlewares/auth.middleware"
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/auth',
      children: [
        {
          path: "login",
          name: LOGIN_PAGE,
          component: () => import("../views/auth/LoginView.vue")
        },
        {
          path: "register",
          name: REGISTER_PAGE,
          component: () => import("../views/auth/RegisterView.vue")
        }
      ]
    },
    {
      path: '/',
      beforeEnter: [authMiddleware],
      component: () => import("../components/panel-layout/PanelLayout.vue"),
      children: [
        {
          path: '/',
          name: DASHBOARD_PAGE,
          component: () => import("../views/DashboardView.vue")
        }
      ]
    }
  ]
})

export default router
