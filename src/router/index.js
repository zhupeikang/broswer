import Block from "@/pages/Block/Index.vue";
import Index from "@/pages/Home/Index.vue";
import NFT from "@/pages/NFT/Index.vue";
import Transaction from "@/pages/Transaction/Index.vue";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: Index,
        name: 'Home'
    },
    {
        path: '/block',
        component: Block,
        name: 'Block',
        meta: { keepAlive: true }
    },
    {
        path: '/block/:hash/:num/:time/:height',
        component: () => import('@/pages/Block/Detail.vue'),
        name: 'BlockDetail',
        meta: {
            keepAlive: false
        }
    },
    {
        path: '/transaction',
        component: Transaction,
        name: 'Transaction'
    },
    {
        path: '/nft',
        component: NFT,
        name: 'NFT'
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition)
        if (savedPosition) {
            return savedPosition
        }

        // 2️⃣ 锚点跳转
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }

        // 3️⃣ 普通页面切换（新页面）
        return {
            top: 0
        }
    },
})
