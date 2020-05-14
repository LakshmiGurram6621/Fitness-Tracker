const express=require('express');
const app=express();
const usersModel = require('./models/Users');
const exerciseModel = require('./models/Exercise');
const mailModel = require('./models/Mail');
const getExercise = require('./models/GetExerciseName');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
    next();
});
app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .get('/', (req, res) => res.send('Express JS is working!') )
    .use('/users', usersModel)
    .use('/exercise', exerciseModel)
    .use('/sendmail',mailModel)
    .use('/getExercise',getExercise)
    
app.listen(3000,()=>{
    console.log("Im listening to this port" );
});
