const express = require('express');
const router = express.Router();
const Users = [
    { Name: 'Lakshmi', Password: '1111', Email: 'lakshmi@gmail.comu', userId: 0 },
    { Name: 'Laxmi', Password: '2222', Email: 'laxmi@gmail.com', userId: 1},
    { Name: 'Lucky', Password: '3333', Email: 'lucky@gmail.com', userId: 2 }   
];

router
    .post('/login', (req, res) => {
        res.send(Users);
    })  
    .get('/login/:Email',(req,res)=>{
        //console.log(req.params);
        const user=Login(req.params.Email);
        if(user!=null){
            res.send(user);   
        }else{
            res.status(400).json({'msg':`no member found for this id ${req.params.Email}`});
        }
            
    })      

module.exports = router
function Login(Email){
    const found=Users.some(user=>user.Email === Email);
    //console.log(found);
    if(found){
        const user=Users.filter(user=>user.Email === Email);
        return user;
    }    
}

