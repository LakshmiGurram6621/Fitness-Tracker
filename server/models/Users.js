const express = require('express');
const fs=require('fs');
const router = express.Router();
let rawdata = fs.readFileSync('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt');
const Users = JSON.parse(rawdata);

//const Users=JSON.parse(fs.readFileSync('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt', 'utf8'));

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
    .put('/login/:Name,:Email,:Password',(req,res)=>{
        Newuser={
            'Name':req.params.Name,
            'Password':req.params.Password,
            'Email':req.params.Email
        }
        console.log("function is calling1");
        const data = JSON.stringify(Newuser);
        Users.push(Newuser);
        fs.writeFileSync('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt',JSON.stringify(Users));
        res.send(Users);
        // write JSON string to a file
        // fs.readFile('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt', function (err, data) {
        //     var json = JSON.parse(data)
        //     json.push(data)
        
        //     fs.writeFile("/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt", JSON.stringify(json))
        // })



        // let fd;
        // try {
        //     //fd = fs.openSync('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt', 'a');
        //     //fs.appendFileSync('/Users/lakshmi/Desktop/Web practice/Fitness Tracker/server/models/users.txt', data);
        //     //fs.appendFileSync(fd, data, 'utf8');
        //     console.log("JSON data is saved.");
        // } catch (error) {
        //     console.error(err);
        // }
        //res.send(Users);
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

