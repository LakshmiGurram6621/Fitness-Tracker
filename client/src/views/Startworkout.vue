<template>
<div> 
   <createworkout></createworkout>
   <br>
   <h2>Your Created Workouts Will be Added Here</h2>
   <br>
   <p>You Have Created {{displayExercise}} Exercises</p>
   <br>
   <table class="table">
  <thead>
    <tr>
      <th><abbr title="Position">Number</abbr></th>
      <th>Excercise</th>
      <th>Time</th>
      <th>Calories</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="index in displayExercise" v-bind:key="index">
      <td>{{index}}</td> 
      <th>{{exercise[index-1]}}</th>
      <td>{{time[index-1]}}</td>
      <td>{{calories[index-1]}}</td>
      <td><input class="button is-small is-link is-light" type="submit" value="ADD" v-on:click = "addExercise(exercise[index-1],time[index-1],calories[index-1])"></td>
    </tr>
  </tbody>
</table>
</div>  

</template>
<script>
    import addworkoutpage from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Addworkout.vue"
    import {mapGetters,mapState,mapMutations} from 'vuex'
    import createworkout from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Createworkout.vue"
    import { updateUserExercise } from "../models/UpdateUserExercise";
    export default{
        computed: {
            ...mapGetters([
               'displayExercise'
          ]),
          ...mapState([
          'exercise','time','calories'
         ]),
        },
        components: {
                addworkoutpage,createworkout
        },
        methods : {
               async addExercise(e,t,c) {
                  console.log("Hello");
                  try {
                      console.log(e);
                      console.log(t);
                      console.log(c);
                      console.log("Inside addrees is"+this.$store.state.user);
                      await updateUserExercise(e,t,c,this.$store.state.user);
                  } catch (error) {
                      this.error = error;
                  }
                  
               }
        }        
 }
</script>