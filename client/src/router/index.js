import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Workouts from '../views/Workouts.vue'
import Popular from '../views/Popular.vue'
import Beginner from '../views/Beginner.vue'
import Yoga from '../views/Yoga.vue'
import All from '../views/All.vue'

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
      },
      {
        path: '/Popular',
        name: 'Popular',
        component: Popular
      },
      {
        path: '/Beginner',
        name: 'Beginner',
        component: Beginner
      },
      {
        path: '/Yoga',
        name: 'Yoga',
        component: Yoga
      },
      {
        path: '/All',
        name: 'All',
        component: All
      }


    ]
})