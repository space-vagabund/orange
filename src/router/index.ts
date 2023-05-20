import { createRouter, createWebHistory } from "vue-router";
import { APP_ROUTERS } from "@/constants";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

const routes = [{
    path: APP_ROUTERS.LOGIN,
    name: 'login-page',
    component: LoginPage
}, {
    path: APP_ROUTERS.DASHBOARD,
    name: 'dashboard-page',
    component: DashboardPage
}];

const history = createWebHistory(process.env.BASE_URL);

const router = createRouter({
    history,
    routes
});

export default router;
