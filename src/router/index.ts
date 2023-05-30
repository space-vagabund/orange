import { createRouter, createWebHistory } from "vue-router";
import { APP_ROUTERS } from "@/constants";
import DashboardPage from "@/pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import CreateAccountPage from "../pages/CreateAccountPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

const routes = [{
    path: APP_ROUTERS.SIGN_IN,
    name: 'sign-in-page',
    component: SignInPage
}, {
    path: APP_ROUTERS.FORGOT_PASSWORD,
    name: 'forgot-password-page',
    component: ForgotPasswordPage
}, {
    path: APP_ROUTERS.CREATE_ACCOUNT,
    name: 'create-account-page',
    component: CreateAccountPage
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
