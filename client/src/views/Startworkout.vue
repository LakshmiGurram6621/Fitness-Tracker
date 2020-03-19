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
    </tr>
  </thead>
  <tbody>
    <tr v-for="index in displayExercise" v-bind:key="index">
      <td>{{index}}</td> 
      <th>{{exercise[index-1]}}</th>
      <td>{{time[index-1]}}</td>
      <td>{{calories[index-1]}}</td>
    </tr>
  </tbody>
</table>
</div>  

</template>
<script>
    import addworkoutpage from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Addworkout.vue"
    import {mapGetters,mapState,mapMutations} from 'vuex'
    import createworkout from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Createworkout.vue"
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
        }
 }
</script>