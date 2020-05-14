const express = require('express')
const router = express.Router();
const fs=require('fs');
let rawdata = fs.readFileSync('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/exercise.txt');
const Exercise = JSON.parse(rawdata);
router
    .get('/',(req,res)=>{
          const exercisename=Exercise[0].exercise.exercise0.Exercise;
          console.log(exercisename);
          var names = Object.keys(Exercise).length
          const exerciseName=[];
          for (var i=0;i<names;i++){
                      exerciseName.push(Exercise[i].exercise.exercise0.Exercise)
                  
          }
          console.log(exerciseName);
          res.send(exerciseName);
    })   
module.exports = router
function ExistingUser(Email){
    const found=Exercise.some(exercise=>exercise.user.Email === Email);
    console.log(found);
    return found;
}