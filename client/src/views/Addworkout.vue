<template>
  <div id="addworkout">
      <createworkoutMenu></createworkoutMenu>
      <div class="field">
         <label class="label">Exercise Name*</label>
         <div class="control">
            <input class="input is-primary column is-5" v-model="addexercise" @change="addExercise(addexercise)" placeholder="Exercise Name">
         </div>
      </div>
      <br>
      <div class="field">
       <section>
          <p class="content"><b>Find Existing Exercise:</b> {{ selected }}</p>
           <b-field label="Find a JS framework">
            <b-autocomplete
                rounded
                v-model="name"
                :data="getExercise"
                placeholder="e.g. yoga"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
        </b-field>
    </section>
      </div>  
      <div class="field">
         <label class="label">Time To Spent*</label>
         <div class="control">
           <input class="input is-primary column is-5" type="text" v-model="addtime" @change="addTime(addtime)" placeholder="Duration of the time to spent on the exercise">
         </div>
      </div>
     <div class="field">
         <label class="label">Calories*</label>
         <div class="control">
           <input class="input is-primary column is-5" v-model="addcalories" @change="addCalories(addcalories)" placeholder="Calories to burn">
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
  import {getExerciseName} from "../models/GetExerciseName";
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
                name: '',
                selected: null,
                data:[]
        }
      },
      components:{
          createworkoutMenu
      },
      computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            },
            async getExercise() {
                  console.log("Hello");
                  //this.isToggled = !this.isToggled;
                  //console.log(isToggled);
                  try {
                      console.log("get Exercise name is");
                      const result=await getExerciseName();
                      console.log("get Exercise name is"+result);
                      this.data=result;
                  } catch (error) {
                      this.error = error;
                  }
            }        
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
            if(!this.addtime || !this.addexercise || !this.addcalories){
                alert("All * fields are mandatory");
            }else{
                alert("Your planning to start your created exercise,please naviage to Start Work Out Page");
                this.addtime=''; 
                this.addexercise='';
                this.addcalories='';
            }
          },
          deleteData:function(){
             this.DELETE_Excercise(this.addexercise);
             this.DELETE_Time(this.addtime);
             this.DELETE_Calories(this.addcalories);
             this.addtime=''; 
             this.addexercise='';
             this.addcalories='';
          },
          
      }
  } 
</script>