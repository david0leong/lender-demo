import Vue from 'vue'
import VueRouter from 'vue-router'

import Teams from './views/Teams'
import TeamAdd from './views/TeamAdd'
import TeamEdit from './views/TeamEdit'
import TeamDetails from './views/TeamDetails'
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
    path: '/teams/new',
    name: 'TeamAdd',
    component: TeamAdd,
  },
  {
    path: '/teams/:id',
    name: 'TeamDetails',
    component: TeamDetails,
  },
  {
    path: '/teams/:id/edit',
    name: 'TeamEdit',
    component: TeamEdit,
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
