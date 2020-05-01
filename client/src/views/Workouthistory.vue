<template>
    <h1>this is workout history page {{exercise}}{{id}}</h1>
    
</template>
<script>
import { fetchExercise } from "../models/FetchExercise";
let finalreuslt={};
export default {
    name: 'HelloWorld',
    data () {
        return {
                id: "",
                exercise:"",
                }
            },   
    created: function(){
        this.fetchExercise().then(data=>{
            console.log("data is"+data);
            finalreuslt=data;
            //this.id=result.Exercise;
            //console.log("Id is"+finalreuslt.Exercise);
        })
    },   
    mounted: function(){
           console.log("Mounted function is calling"+finalreuslt);
    },   
    updated: function(){
           console.log("updated function is calling"+finalreuslt); 
           console.log(this.id);
    },
    methods:{
        async fetchExercise(){
            try {
                console.log(this.$store.state.user);
                const result=await fetchExercise(this.$store.state.user);
                console.log("Here result issss"+result[0]);
                this.exercise=result[0];
                this.id=result[1];
                console.log(this.id);
                //console.log(result.Exercise);
                finalreuslt=result;
                return result;
                //return finalreuslt;
                // console.log(user);
                // console.log(result[0].exercise);
                // console.log(result[0].exercise.exercise0);
                // console.log(Object.keys(result[0].exercise).length);
                //console.log(result[0].exercise.length);
                //this.$router.push('/Today');
            } catch (error) {
                this.error = error;
            }
            console.log("final result is"+finalreuslt);
           
        }
    }
}        
</script>