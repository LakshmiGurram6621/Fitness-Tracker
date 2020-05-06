<template>
    <div class="content">
    <!-- <ul>
        {{exercise}}
        <li v-for="i in exercise">
            {{i.Exercise}}  {{i.Time}} {{i.Calories}} {{i.Date}}
       </li>  
    </ul>      -->
  <table class="table" v-if="user!=''">
  <thead>
    <tr title is-5>
      <th>Excercise</th>
      <th>Time</th>
      <th>Calories</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="subtitle is-5" v-for="index in exercise" v-bind:key="index">
      <td>{{index.Exercise}}</td> 
      <th>{{index.Time}}</th>
      <td>{{index.Calories}}</td>
      <td>{{index.Date}}</td>
    </tr>
  </tbody>
</table>
<br>
<br>
 <div id="email" v-if="user!=''">
   <a class="title is-5">share with friends </a>
   <toggle-button id="button" @change="sendMail();">share with friends</toggle-button>
   <br>
   <p>After entering email address press enter key and below check box to submit</p>
   <br>
   <input class="title is-5" type="checkbox" @click="sentMail()">confirn Email Address
 </div> 
</div>
</template>
<script>
import { fetchExercise } from "../models/FetchExercise";
import {sendEmail} from "../models/Sendemail";
let finalreuslt={};
let email="";
export default {
    data () {
        return {
                exercise:[],
                //email:"",
                limit:"",
                user:"",
                }
            },   
    created: function(){
        //this.currentUser=this.$store.state.user;
        //console.log(currentUser);
        this.fetchExercise();
    },   
    methods:{
        async fetchExercise(){
            try {
                this.user=this.$store.state.user;
                //alert(this.user);
                if(this.user !=" "){
                   console.log("user is"+this.$store.state.user);   
                   finalreuslt=await fetchExercise(this.$store.state.user);
                   this.user=this.$store.state.user;
                   console.log("Here result issss"+finalreuslt);
                   console.log("final result is"+finalreuslt[0].length);
                   console.log("final result is wrong"+finalreuslt[0]);
                   this.exercise=finalreuslt;
                   this.exercise=JSON.parse(this.exercise);
                }else{
                       alert("Please register with our App,so that you can track your Exercises");
                }
                
            } catch (error) {
                this.error = error;
            }
        },
        sendMail(){
               //alert("calling");
               if(this.user!=" "){
                      var label = document.createElement("label");
                      var input=document.createElement("input");
                      label.appendChild(document.createTextNode("Enter Email Address"));
                      input.setAttribute("id","emailaddress");
                      document.getElementById("button").appendChild(label);
                      document.getElementById("button").appendChild(input);
                      
                      input.onkeyup = function(e){
                         if(e.keyCode === 13){
                             e.preventDefault(); // Ensure it is only this code that rusn
                             email=document.getElementById("emailaddress").value;
                             alert(email);
                      }
                 }
               
              }else{
                alert("You have to be a registered user to use this functionality");
              }
        },
        async sentMail() {
          console.log("Hello000");
            try {
                  console.log(email);
                  console.log(this.exercise);
                  await sendEmail(email,this.user);
                }catch (error) {
                  this.error = error;
               }
        }  
    }
}        
</script>