import { createRouter, createWebHashHistory } from 'vue-router'
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
  history: createWebHashHistory('/EnvironmentalEducationWeb/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有錨點，滾動到該元素
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // 為導航列預留空間
      }
    }
    // 如果有儲存的位置，回到該位置
    if (savedPosition) {
      return savedPosition
    }
    // 否則滾動到頂部
    return { top: 0 }
  }
})

export default router
