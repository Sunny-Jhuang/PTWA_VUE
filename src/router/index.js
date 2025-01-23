import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/Blog.vue')
    },
    {
      path: '/blogSearch',
      name: 'blogSearch',
      component: () => import('../views/BlogSearch.vue')
    },
    {
      path: '/newsInfo',
      name: 'newsInfo',
      component: () => import('../views/NewsInfo.vue')
    },
    {
      path: '/teaching',
      name: 'teaching',
      component: () => import('../views/Teaching.vue')
    },
    {
      path: '/judgePT',
      name: 'judgePT',
      component: () => import('../views/JudgePT.vue')
    },
    {
      path: '/relax&fun',
      name: 'relax&fun',
      component: () =>import('../views/Relax&Fun.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
