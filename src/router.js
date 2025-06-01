import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './components/Homepage.vue'
import ZonePollution from './components/ZonePollution.vue'
import ZoneClean from './components/ZoneClean.vue'
import ZoneInteractive from './components/ZoneInteractive.vue'
import AboutUs from './components/AboutUs.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/zone-pollution', component: ZonePollution },
  { path: '/zone-clean', component: ZoneClean },
  { path: '/zone-interactive', component: ZoneInteractive },
  { path: '/about-us', component: AboutUs },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
