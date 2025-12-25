import { createMemoryHistory, createRouter } from 'vue-router'
import Index from "@/pages/Home/Index.vue";

const routes = [
    { path: '/', component: Index },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
