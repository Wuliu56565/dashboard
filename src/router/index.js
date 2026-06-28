import { createRouter, createWebHistory } from "vue-router";

// 路由规则
const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/setting",
        component: () => import("../views/Setting.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router