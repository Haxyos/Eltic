import { createApp } from 'vue'
import App from './App.vue'
import './style.css/'
import Copropriété from '../components/Copropriété.vue';
import Devis from '../components/Devis.vue';
import Card from '../components/Card.vue';
import Qualification from '../components/Qualification.vue';
import NosReal from '../components/nosReal.vue';
import Recharge from '../components/Recharge.vue';
import ElticBorne from './ElticBorne.vue';
import ElticVideo from './ElticVideo.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Copropriété', component: Copropriété },
        { path: '/Devis', component: Devis },
        { path: '/Card', component: Card },
        { path: '/Qualification', component: Qualification },
        { path: '/nosReal', component: NosReal},
        { path: '/Recharge', component: Recharge },
        { path: '/ElticBorne', component: ElticBorne },
        { path: '/ElticVideo', component: ElticVideo}
    ]
});
const app = createApp(App)
app.use(router)
app.mount('#app')

