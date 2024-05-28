import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/new',
      name: 'new-event',
      component: () => import('@/views/NewEventPage.vue'),
    },
    {
      path: '/event/:id/edit',
      name: 'edit-event',
      component: () => import('@/views/EditEventPage.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/views/SignInPage.vue'),
    },
    {
      path: '/what-is-asg',
      name: 'what-is-asg',
      component: () => import('@/views/WhatIsASGPage.vue'),
    },
  ],
})

export default router
