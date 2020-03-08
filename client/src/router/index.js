import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Workouts from '../views/Workouts.vue'


//Creating vue object and creating path for every vue module
Vue.use(VueRouter)
export default new VueRouter({
     routes:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Today',
        name: 'Today',
        component: Today
      },
      {
        path: '/Workouts',
        name: 'Workouts',
        component: Workouts
      }

    ]
})