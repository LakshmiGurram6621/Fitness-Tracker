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
      <td><input class="button is-small is-link is-light" type="submit" value="ADD" v-on:click = "addExercise"></td>
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
               async addExercise() {
                  console.log("Hello");
                  try {
                      console.log(this.exercise);
                      console.log(this.time);
                      console.log(this.calories);
                      console.log("Inside addrees is"+this.$store.state.user);
                      await updateUserExercise(this.exercise,this.time,this.calories,this.$store.state.user);
                      //console.log("coming here");
                     // alert("Your registration is succeessful please login");
                     //this.$router.push('/Login');
                  } catch (error) {
                      this.error = error;
                  }
                  
               }
        }        
 }
</script>