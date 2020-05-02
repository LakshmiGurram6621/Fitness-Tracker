<template>
    <div class="content">
    <ul id="exercise">
       <li v-if="exercise && !currentUser"> You have to be a registered user to view your work history</li>
       <li v-if="currentUser && exercise">you have not yet started any workouts,please go to start worlout page</li>
       <li v-for="value in exercise">
         {{value[0]}}{{value[1]}}
       </li>
    </ul>
</div>
</template>
<script>
import { fetchExercise } from "../models/FetchExercise";
let finalreuslt={};
export default {
    data () {
        return {
                id: "",
                exercise:{},
                currentUser:"",
                }
            },   
    created: function(){
        this.currentUser=this.$store.state.user;
        console.log(currentUser);
        this.fetchExercise();
    },   
    methods:{
        async fetchExercise(){
            try {
                console.log("user is"+this.$store.state.user);   
                finalreuslt=await fetchExercise(this.$store.state.user);
                console.log("Here result issss"+parseInt(finalreuslt[0]));
                this.exercise=finalreuslt;
                
            } catch (error) {
                this.error = error;
            }
            console.log("final result is"+finalreuslt);
           
        }
    }
}        
</script>