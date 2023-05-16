import { createRouter, createWebHistory } from 'vue-router';

// path and routes
const routes = [

    {
        name: 'HomePage',
        path: '/',
        component: () => import('../components/HomePage.vue'),
    },

    {
        name: 'ResumePage',
        path: '/resume',
        component:  () => import('../components/ResumePage.vue')
    },

    {
        name: 'ContactPage',
        path: '/contacts',
        component:  () => import('../components/ContactPage.vue')
    },

    {
        name: 'AboutMe',
        path: '/about',
        component:  () => import('../components/AboutMe.vue')
    },

    {
        name: 'PortfolioPage',
        path: '/portfolio',
        component:  () => import('../components/PortfolioPage.vue')
    },
    {
        name: 'ServicesPage',
        path: '/services',
        component:  () => import('../components/ServicesPage.vue')
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;