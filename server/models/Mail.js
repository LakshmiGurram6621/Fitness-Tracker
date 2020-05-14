const express = require('express')
var nodemailer = require('nodemailer');
var path = require('path');
const router = express.Router();
const fs=require('fs');
console.log("Directory name is"+path.join(__dirname,"../models/exercise.txt"));
let rawdata = fs.readFileSync(path.join(__dirname,"../models/exercise.txt"));
const Exercise = JSON.parse(rawdata);
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'FitnessTrackerSpring2020@gmail.com',
    pass: 'Fitness@2020'
  }
});
const sendMail=(email,text,cb)=>{
    var mailOptions = {
        from: 'lakshmi6621.gurram@gmail.com',
        to: email,
        subject: 'Sharing my fitness secret with you',
        text: text
      };
      
transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          cb(error,null);
        } else {
          console.log('Email sent: ' + info.response);
          cb(null,data);
        }
      });
}
router
    .post('/:email,:user1',(req,res)=>{
        const email=req.params.email;
        //const user=req.params.user;
        const user1=Exercise.filter(exercise=>exercise.user.Email === req.params.user1);
        //user=JSON.stringify(user);  
        console.log("user in mail implementation is"+user1);  
        var count = Object.keys(user1[0].exercise).length;
        console.log(count);
        console.log("user is"+JSON.stringify(user1[0].exercise));  
        const text=user1[0].exercise;
        console.log(text);
        sendMail(email,JSON.stringify(text),function(err,data){
            console.log("text is"+text);
            if(err){
                console.log("There is a error in sending the mail");
            }else{
                console.log("message sent");
            }
        })
        res.send("success");
    });   
module.exports=router;