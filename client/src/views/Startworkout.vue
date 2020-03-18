<template>
<div>
   <h2>Your Created Workouts Will be Added Here</h2>
   <br>
   <p>You Have Created {{displayExercise}} Exercises</p>
   <br>
   <div>
   <ul>
       <li v-for="(list,index) in exercise" v-bind:key="index">
          <p>Exercise Name {{list}}</p>
       </li> 
       <li v-for="(list,index) in time" v-bind:key="index">
          <p>Time Spent is {{list}}</p>
       </li> 
       <li v-for="(list,index) in calories" v-bind:key="index">
          <p>Calories burn  {{list}}</p>
       </li> 
   </ul>  
   </div>  

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
                addworkoutpage
        }
 }
</script>