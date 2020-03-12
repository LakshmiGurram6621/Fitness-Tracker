<template>
  <div id="addworkout">
      <createworkoutMenu></createworkoutMenu>
      <div class="field">
         <label class="label">Exercise Name</label>
         <div class="control">
           <input class="input is-primary column is-5" v-model="exercise" type="text" placeholder="Exercise Name">
           <p>message is :{{exercise}}</p>
         </div>
      </div>
      <br>
      <div class="field">
         <label class="label">Time To Spent</label>
         <div class="control">
           <input class="input is-primary column is-5" v-model="time" type="text" placeholder="Duration of the time to spent on the exercise">
           <p>message is :{{time}}</p>
         </div>
      </div>
     <div class="field">
         <label class="label">Calories</label>
         <div class="control">
           <input class="input is-primary column is-5" v-model="calories" type="text" placeholder="Calories to burn">
           <p>message is :{{calories}}</p>
         </div>
     </div> 
     <div class="buttons">
          <router-link to="/Today/Startworkout"><button class="button is-primary" >Add</button></router-link>
          <button class="button is-link" >Cancel</button>
    </div>
  </div>    
</template>

<script>
  import createworkoutMenu from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Createworkout.vue"
  export default {
      props: {
            exercise: '',
            time: '',
            calories:''
      },
      components:{
          createworkoutMenu
      }    
  } 
  
</script>