<template>
<div>
   <h2>Your Created workouts will be added here</h2>
   <p>{{displayExercise}} </p>
   <ul>
       <li v-for="(l,i) in exercise" v-bind:key="i">
           {{l}}
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
          'exercise'
         ]),
        },
        components: {
                addworkoutpage
        }
 }
</script>