import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/main/main.vue'
import Login from './views/login/login.vue'
import Register from './views/register/register.vue'
import Set from './views/main/set/set.vue'
import Chart from './views/main/chart/chart.vue'
import Lastchart from './views/main/lastchart/lastchart.vue'

Vue.use(Router)

const MainRouter = [{
    path: 'chart',
    name: 'chart',
    component: Chart
  },
  {
    path:'set',
    name:'set',
    component:Set
  },
  {
    path:'lastchart',
    name:'lastchart',
    component:Lastchart
  },
  {
    path: '/',
    redirect: 'chart'
  }
]

export default new Router({
  routes: [{
      path: '/main',
      name: 'main',
      component: Main,
      children: MainRouter
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }, ,
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/',
      redirect: 'login'
    }
  ]
})