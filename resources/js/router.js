import Vue from 'vue'
import VueRouter from 'vue-router'

import Teams from './views/Teams'
import Players from './views/Players'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'Teams' },
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams,
  },
  {
    path: '/players',
    name: 'Players',
    component: Players,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
