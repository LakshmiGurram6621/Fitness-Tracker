import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
 state: {
     exercise:[

     ],
     time:[

     ],
     calories:[

     ]
 },
 getters: {
     displayExercise: state =>{
         return state.exercise.length
     }
 },
 mutations: {
    ADD_Time:(state,addtime) =>{
        console.log(addtime);
        state.time.push(addtime);
    },
    ADD_Excercise:(state,addexercise) =>{
        console.log(addexercise);
        state.exercise.push(addexercise);
    },
    ADD_Calories:(state,addCalories) =>{
        console.log(addCalories);
        state.calories.push(addCalories);
    },
    DELETE_Excercise:(state,addexercise)=>{
        state.exercise.pop();
    }
 },
 actions: {}
});