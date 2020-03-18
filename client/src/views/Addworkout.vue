<template>
  <div id="addworkout">
      <createworkoutMenu></createworkoutMenu>
      <div class="field">
         <label class="label">Exercise Name</label>
         <div class="control">
            <input class="input is-primary column is-5" v-model="addexercise" type="text" placeholder="Exercise Name">
            <p>message is {{addexercise}}</p>
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
          <button class="button is-primary" @click="addData">Add</button>
          <button class="button is-link" >Cancel</button>
    </div>
  </div>    
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
  import createworkoutMenu from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Createworkout.vue"
  export default {
      computed : {
             ...mapState([
          'exercise'
         ]),
      },
      data(){
        return{
                addexercise:'',
                time:'',
                calories:'',
        }
      },
      components:{
          createworkoutMenu
      },
      methods:{
          ...mapMutations([
            'ADD_Data'
          ]),
          addData:function(){
            this.ADD_Data(this.addexercise);
            this.addexercise='';
          }
      }
  } 
</script>