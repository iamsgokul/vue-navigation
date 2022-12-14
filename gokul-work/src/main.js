import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Pages/HomePage.vue';
import Profile from './components/Pages/ProfilePage.vue';
import Tools from './components/Pages/ToolsPage.vue';
import Search from './components/Pages/SearchPage.vue';
import { createRouter, createWebHistory} from 'vue-router';


const routing = [
    {
        path: '/', component:Home,
    },
    {
        path: '/profile', component:Profile,
    },
    {
        path: '/tools', component:Tools,
    },
    {
        path: '/search', component:Search,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes:routing,
    linkActiveClass:'active',
})

const app = createApp(App);
app.use(router);
app.mount('#app');