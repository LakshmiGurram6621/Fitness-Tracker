const express = require('express');
const fs=require('fs');
const router = express.Router();
var path = require('path');
let rawdata = fs.readFileSync(path.join(__dirname,"../models/users.txt"));
const Users = JSON.parse(rawdata);

router
    .post('/login', (req, res) => {
        res.send(Users);
    })  
    .get('/login/:Email',(req,res)=>{
        console.log(req.params.Email);
        const user=Login(req.params.Email);
        if(user!=null){
            res.send(user);   
        }else{
            res.status(400).json({'msg':`no member found for this id ${req.params.Email}`});
        }
            
    })    
    .post('/login/:Name,:Email,:Password',(req,res)=>{
            Newuser={
                'Name':req.params.Name,
                'Password':req.params.Password,
                'Email':req.params.Email
            }
            console.log("function is calling1");
            Users.push(Newuser);
            fs.writeFileSync(path.join(__dirname,"../models/users.txt"),JSON.stringify(Users));
            res.send(Users);
    })  
module.exports = router
function Login(Email){
    const found=Users.some(user=>user.Email === Email);
    if(found){
        const user=Users.filter(user=>user.Email === Email);
        return user;
    }    
}

