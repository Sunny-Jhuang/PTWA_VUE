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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
