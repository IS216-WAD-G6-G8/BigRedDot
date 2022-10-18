import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import LandingPage from './components/LandingPage.vue';
import FireBaseTest from './components/FireBaseTest.vue';
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/Landing',
        component: LandingPage,
    },
    {
        path: '/Test',
        component: FireBaseTest
    }
];
export default createRouter({
    history: createWebHistory(), routes
});
