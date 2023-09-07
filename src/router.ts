
import { createRouter, createWebHistory } from 'vue-router';
import DesignForm from './pages/CustomFormDesign/index.vue'
import DisplayForm from './pages/CustomFormDisplay/index.vue'

const routes = [
    { path: '/', component: DesignForm },
    { path: '/display', component: DisplayForm },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };

