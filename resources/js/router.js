import Vue from 'vue'
import VueRouter from 'vue-router'

import Teams from './views/Teams'
import TeamDetails from './views/TeamDetails'
import TeamAdd from './views/TeamAdd'
import TeamEdit from './views/TeamEdit'
import Players from './views/Players'
import PlayerDetails from './views/PlayerDetails'
import PlayerAdd from './views/PlayerAdd'
// import PlayerEdit from './views/PlayerEdit'

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
  {
    path: '/players/:id',
    name: 'PlayerDetails',
    component: PlayerDetails,
  },
  {
    path: '/players/new',
    name: 'PlayerAdd',
    component: PlayerAdd,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
