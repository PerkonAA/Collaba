import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'default-layout',
      },
      children: [
        {
          path: 'welcome-login',
          components: {
            tabs: () => import('../views/LoginView.vue')
          }
        },
        {
          path: 'welcome-settings',
          components: {
            tabs: () => import('../views/SettingsView.vue')
          }
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      meta: {
        layout: 'layout-with-header',
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        layout: 'layout-with-header',
      },
    },
    {
      path: '/speaking',
      name: 'speaking',
      component: () => import('../views/SpeakingView.vue'),
      meta: {
        layout: 'layout-with-header',
      },
    },
    {
      path: '/my-partners',
      name: 'my-partners',
      component: () => import('../views/MyPartnersView.vue'),
      meta: {
        layout: 'layout-with-header',
      },
    },
    {
      path: '/components',
      name: 'components',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: '/my-teammate',
      name: 'components',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentsView.vue')
    },
    { path: '/:pathMatch(.*)*', component: () => 'Not Found'  }
  ]
} as any)

export default router
