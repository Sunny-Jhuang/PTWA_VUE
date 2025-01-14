import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../views/Blog.vue'),
        children: [
          {
            path: 'blogSearch',
            component: () => import('../components/BlogSearch.vue')
          }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
