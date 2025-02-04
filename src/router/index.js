import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue')
  },
  {
    path: '/blogSearch',
    name: 'blogSearch',
    component: () => import('@/views/BlogSearch.vue')
  },
  {
    path: '/newsInfo',
    name: 'newsInfo',
    component: () => import('@/views/NewsInfo.vue')
  },
  {
    path: '/teaching',
    name: 'teaching',
    component: () => import('@/views/Teaching.vue')
  },
  {
    path: '/judgePT',
    name: 'judgePT',
    component: () => import('@/views/JudgePT.vue')
  },
  {
    path: '/relax&fun',
    name: 'relax&fun',
    component: () => import('@/views/Relax&Fun.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
