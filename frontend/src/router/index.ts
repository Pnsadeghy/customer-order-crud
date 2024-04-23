import {DASHBOARD_PAGE, LOGIN_PAGE, ORDER_NEW_PAGE, ORDER_SHOW_PAGE, REGISTER_PAGE} from "@/router/names"
import authMiddleware from "@/router/middlewares/auth.middleware"
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/auth',
      component: () => import("@/app/layout/auth-layout/AuthLayout.vue"),
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
      component: () => import("@/app/layout/panel-layout/PanelLayout.vue"),
      children: [
        {
          path: '/',
          name: DASHBOARD_PAGE,
          component: () => import("../views/DashboardView.vue")
        },
        {
          path: '/order',
          children: [
            {
              path: 'new',
              name: ORDER_NEW_PAGE,
              component: () => import("../views/order/OrderNewView.vue")
            },
            {
              path: ':id',
              name: ORDER_SHOW_PAGE,
              component: () => import("../views/order/OrderShowView.vue")
            }
          ]
        }
      ]
    }
  ]
})

export default router
