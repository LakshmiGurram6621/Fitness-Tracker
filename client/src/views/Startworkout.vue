<template>
<div> 
   <createworkout></createworkout>
   <br>
   <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
           <div class="tile is-parent is-vertical">
               <article class="tile is-child notification is-warning title is-5">
                  Your Created Workouts Will be Added Here
                  <br>
                  <br>
                  You Have Created {{displayExercise}} Exercises
              </article>
           </div>  
       </div>
      </div> 
   </div>   
   <table class="table">
  <thead>
    <tr class="title is-5">
      <th><abbr title="Position">Number</abbr></th>
      <th>Excercise</th>
      <th>Time</th>
      <th>Calories</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr class="subtitle is-5" v-for="index in displayExercise" v-bind:key="index">
      <td>{{index}}</td> 
      <th>{{exercise[index-1]}}</th>
      <td>{{time[index-1]}}</td>
      <td>{{calories[index-1]}}</td>
      <td><toggle-button  value="ADD" @change = "addExercise(exercise[index-1],time[index-1],calories[index-1])">ADD</toggle-button></td>
    </tr>
  </tbody>
</table>
</div>  

</template>
<script>
    import addworkoutpage from "../views/Addworkout"
    import {mapGetters,mapState,mapMutations} from 'vuex'
    import createworkout from "../views/Createworkout"
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
        data:{
                 isToggled: false 
        },
        methods : {
               async addExercise(e,t,c) {
                  console.log("Hello");
                  //this.isToggled = !this.isToggled;
                  //console.log(isToggled);
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