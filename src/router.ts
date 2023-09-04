
import { createRouter, createWebHistory } from 'vue-router';
import DesignForm from './pages/design-form.vue'
import DisplayForm from './pages/display-form.vue'

const routes = [
    { path: '/', component: DesignForm },
    { path: '/display', component: DisplayForm },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };

