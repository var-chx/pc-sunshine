import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [

    {
        path: '/',
        component: Layout,
        redirect: '/home',
        meta: { title: 'Example', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: { title: 'home', icon: 'home' },
            },
            {
                path: 'home2',
                name: 'home',
                component: () => import('@/views/AboutPage/index.vue'),
                meta: { title: 'home2', icon: 'home' },
            },
        ],
    },

]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
})

const router = createRouter()

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
