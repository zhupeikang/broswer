import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Index from "@/pages/Home/Index.vue";
import Block from "@/pages/Block/Index.vue";
import Transaction from "@/pages/Transaction/Index.vue";

const routes = [
    {path: '/', component: Index},
    {
        path: '/block',
        component: Block
    },
    {
        path: '/block/:hash',
        component: () => import('@/pages/Block/Detail.vue')
    },
    {path: '/transaction', component: Transaction},
    {path: '/nft', component: Block},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
