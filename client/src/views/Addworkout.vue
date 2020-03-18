<template>
  <div id="addworkout">
      <createworkoutMenu></createworkoutMenu>
      <div class="field">
         <label class="label">Exercise Name</label>
         <div class="control">
            <input class="input is-primary column is-5" v-model="addexercise" @change="addExercise(addexercise)" placeholder="Exercise Name">
            <p>message is {{addexercise}}</p>
         </div>
      </div>
      <br>
      <div class="field">
         <label class="label">Time To Spent</label>
         <div class="control">
           <input class="input is-primary column is-5" v-model="addtime" @change="addTime(addtime)" placeholder="Duration of the time to spent on the exercise">
           <p>message is :{{addtime}}</p>
         </div>
      </div>
     <div class="field">
         <label class="label">Calories</label>
         <div class="control">
           <input class="input is-primary column is-5" v-model="addcalories" @change="addCalories(addcalories)" placeholder="Calories to burn">
           <p>message is :{{addcalories}}</p>
         </div>
     </div> 
     <div class="buttons">
          <button class="button is-primary" @click="addData">Add</button>
          <button class="button is-link" @click="deleteData">Cancel</button>
    </div>
  </div>    
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
  import createworkoutMenu from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Createworkout.vue"
  export default {
      computed : {
             ...mapState([
          'exercise','time','calories'
         ]),
      },
      data(){
        return{
                addexercise:'',
                addtime:'',
                addcalories:'',
        }
      },
      components:{
          createworkoutMenu
      },
      methods:{
          ...mapMutations([
            'ADD_Time','ADD_Excercise','ADD_Calories','DELETE_Excercise','DELETE_Time','DELETE_Calories'
          ]),
          addTime:function(){
            this.ADD_Time(this.addtime);
            
          },
          addExercise:function(event){
             this.ADD_Excercise(this.addexercise);
                 
          },
          addCalories:function(event){
              this.ADD_Calories(this.addcalories);
                 
          },
          addData:function(){
             this.addtime=''; 
             this.addexercise='';
             this.addcalories='';
          },
          deleteData:function(){
             this.DELETE_Excercise(this.addexercise);
             this.DELETE_Time(this.addtime);
             this.DELETE_Calories(this.addcalories);
             this.addtime=''; 
             this.addexercise='';
             this.addcalories='';
          }
      }
  } 
</script>