const express=require('express');
const app=express();
const usersModel = require('./models/Users');
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
// });
app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .get('/', (req, res) => res.send('Express JS is working!') )
    .use('/users', usersModel)

app.listen(3000,()=>{
    console.log("Im listening to this port" );
});
