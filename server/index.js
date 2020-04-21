const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send("hello expressJs");
})
app.listen(3000,()=>{
    console.log("Im listening to this port" );
});
