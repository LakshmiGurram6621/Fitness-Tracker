<template>
<div>
   <h2>Your Created workouts will be added here</h2>
   <p>{{displayExercise}} </p>
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