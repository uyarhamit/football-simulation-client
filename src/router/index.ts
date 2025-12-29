import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import FixturesPage from "@/pages/FixturesPage.vue";
import TablePage from "@/pages/TablePage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: MainLayout,
            children: [
                {
                    path: "",
                    name: "Home",
                    component: HomePage,
                },
                {
                    path: "fixtures",
                    name: "Fixtures",
                    component: FixturesPage,
                },
                {
                    path: "table",
                    name: "Table",
                    component: TablePage,
                }
            ]
        }
    ]
});

export default router;
