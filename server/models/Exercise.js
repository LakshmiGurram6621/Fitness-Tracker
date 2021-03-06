const express = require('express')
const router = express.Router();
var path = require('path');
const fs=require('fs');
let rawdata = fs.readFileSync(path.join(__dirname,"../models/exercise.txt"));
const Exercise = JSON.parse(rawdata);
var dateFormat = require('dateformat');
var now = new Date();
rawDate=dateFormat(now).split(" ");
const date=(rawDate[0]+rawDate[1]+rawDate[2]).toString();
router
    .post('/:Exercise,:Time,:Calories,:User',(req,res)=>{
            exercise0={
                'Exercise':req.params.Exercise,
                'Time':req.params.Time,
                'Calories':req.params.Calories,
                'Date':date
            }
            user={
                'Email':req.params.User
            }
            result={user,"exercise":{exercise0}};
            userCheck=ExistingUser(req.params.User);
            if(userCheck==true){
                    const user=Exercise.filter(exercise=>exercise.user.Email === req.params.User);
                    console.log(user);  
                    var count = Object.keys(user[0].exercise).length;
                    console.log(count);
                    console.log("user is"+JSON.stringify(user[0].exercise));    
                    user[0].exercise["exercise"+count]=exercise0;
                    console.log(JSON.stringify(user));
                    const user1=Exercise.filter(exercise=>exercise.user.Email === req.params.User);
                    console.log("        "+user1);
                    res.send(Exercise);        
            }else{
                Exercise.push(result);
                fs.writeFileSync(path.join(__dirname,"../models/exercise.txt"),JSON.stringify(Exercise));
                res.send(Exercise);
            }
        fs.closeSync(rawdata);   
    })    
    .get('/:User',(req,res)=>{
        userCheck=ExistingUser(req.params.User);
        if(userCheck){
            const user1=Exercise.filter(exercise=>exercise.user.Email === req.params.User);
            console.log("        "+user1);
            res.send(user1);
        }else{
            res.send("You are not have started any exercises yet");
        }
    })   
module.exports = router
function ExistingUser(Email){
    const found=Exercise.some(exercise=>exercise.user.Email === Email);
    console.log(found);
    return found;
}