//Importing vue module 
import Vue from 'vue'
//Importing App view,so that application will start from APP page
import App from './App.vue'
//Importing router module so that we can decalre path routing
import router from './router'
//Importing Bulma css
import "bulma"
//Importing font awesome for Icons
import '@fortawesome/fontawesome-free/css/all.css'

//Creating Vue Instance
Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
