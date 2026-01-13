import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css/'
import Copropriete from '@/components/Copropriete.vue'
import Devis from '@/components/Devis.vue'
import Qualification from '@/components/Qualification.vue'
import NosReal from '@/components/nosReal.vue'
import Recharge from '@/components/Recharge.vue'
import ElticBorne from '@/components/ElticBorne.vue'
import ElticVideo from '@/components/ElticVideo.vue'
import HomePage from '@/components/HomePage.vue'
import AidesPrimes from '@/components/AidesPrimes.vue'
import MentionsLegales from '@/components/MentionsLegales.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/Copropriete', component: Copropriete },
    { path: '/Devis', component: Devis },
    { path: '/Qualification', component: Qualification },
    { path: '/Realisation', component: NosReal },
    { path: '/Recharge', component: Recharge },
    { path: '/AidesPrimes', component: AidesPrimes },
    { path: '/ElticBorne', component: ElticBorne },
    { path: '/ElticVideo', component: ElticVideo },
    { path: '/MentionsLegales', component: MentionsLegales },
  ],
})
const app = createApp(App)
app.use(router)
app.mount('#app')

export default { router }
