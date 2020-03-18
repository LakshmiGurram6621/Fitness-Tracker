import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     exercise:[

     ]
 },
 getters: {
     displayExercise: state =>{
         return state.exercise.length
     }
 },
 mutations: {
     ADD_Data:(state,addexercise) =>{
              state.exercise.push(addexercise)
     }
 },
 actions: {}
});