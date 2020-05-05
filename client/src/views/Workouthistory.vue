<template>
    <div class="content">
    <ul>
        {{exercise}}
        <li v-for="i in exercise">
            {{i.Exercise}}  {{i.Time}} {{i.Calories}} {{i.Date}}
       </li>  
    </ul>     
  <table class="table">
  <thead>
    <tr>
      <th>Excercise</th>
      <th>Time</th>
      <th>Calories</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="index in exercise" v-bind:key="index">
      <td>{{index.Exercise}}</td> 
      <th>{{index.Time}}</th>
      <td>{{index.Calories}}</td>
      <td>{{index.Date}}</td>
    </tr>
  </tbody>
</table>

</div>
</template>
<script>
import { fetchExercise } from "../models/FetchExercise";
let finalreuslt={};
export default {
    data () {
        return {
                exercise:[],
                value1:[],
                limit:"",
                }
            },   
    created: function(){
        //this.currentUser=this.$store.state.user;
        //console.log(currentUser);
        this.fetchExercise();
    },   
    methods:{
        async fetchExercise(){
            try {
                if(this.$store.state.user){
                   console.log("user is"+this.$store.state.user);   
                   finalreuslt=await fetchExercise(this.$store.state.user);
                   console.log("Here result issss"+finalreuslt);
                   console.log("final result is"+finalreuslt[0].length);
                   console.log("final result is wrong"+finalreuslt[0]);
                //    for(var i=0;i<finalreuslt[0].length;i++){
                //        console.log("coming inside");
                //        console.log("coming inside"+finalreuslt[i]);
                //        var excercie="exercise"+i;
                //        this.exercise[excercie]=finalreuslt[i];
                //        //console.log("result is"+exercise[0].exercise["exercise"+i]);
                //        //let value="value"+i;
                //        //console.log(value);
                //        //value1[i]=finalreuslt[i];
                //        console.log("coming inside"+finalreuslt[i]);
                //        console.log("here the "+exercise[excercie]);
                //    }
                //    parsed={};
                //    parsed=JSON.parse(finalreuslt);
                //    console.log("parsed object is"+parsed);
                //    for(var pair in parsed)
                //    {
                //       Console.WriteLine("{0}: {1}", pair.Key, pair.Value);
                //     }
                this.exercise=finalreuslt;
                this.exercise=JSON.parse(this.exercise);
                }
                
                
            } catch (error) {
                this.error = error;
            }
        }
    }
}        
</script>