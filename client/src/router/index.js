import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Today from '../views/Today.vue'
import Plans from '../views/Plans.vue'
import Availableplans from '../views/Availableplans.vue'
import Createworkout from '../views/Createworkout.vue'
import Workouthistory from '../views/Workouthistory.vue'
import Popular from '../views/Popular.vue'
import Beginner from '../views/Beginner.vue'
import Yoga from '../views/Yoga.vue'
import Login from '../views/Login.vue'
import Addworkout from '../views/Addworkout.vue'
import Startworkout from '../views/Startworkout.vue'
import SignUp from '../views/Signup.vue'
import About from '../views/About.vue'

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
        path: '/About',
        name: 'About',
        component: About
      },
      {
        path: '/Today',
        name: 'Today',
        component: Today
      },
      {
        path: '/Today/Startworkout',
        name: 'Startworkout',
        component: Startworkout
      },
      {
        path: '/Plans',
        name: 'Plans',
        component: Plans
      },
      {
        path: '/Plans/Availableplans',
        name: 'Availableplans',
        component: Availableplans
      },
      {
        path: '/Plans/Createworkout',
        name: 'Createworkout',
        component: Createworkout
      },
      {
        path: '/Plans/Workouthistory',
        name: 'Workouthistory',
        component: Workouthistory
      },
      {
        path: '/Plans/Popular',
        name: 'Popular',
        component: Popular
      },
      {
        path: '/Plans/Beginner',
        name: 'Beginner',
        component: Beginner
      },
      {
        path: '/Plans/Yoga',
        name: 'Yoga',
        component: Yoga
      },
      {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/Createworkout/Addworkout',
        name: 'Addworkout',
        component: Addworkout
      }
    ]
})
