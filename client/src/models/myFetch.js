/* B"H
*/
const api_root = "http://localhost:3000";
let result;
let Exercise,Time;
async function myFetch(url, data){
    console.log(url);
    console.log(data);
    let response;
    //const headers = { authorization: "bearer " + User.UserId  }

    if(data){
        console.log(api_root + url);
        await fetch(api_root + url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        }).then(res => {
            return res.json()
          })
        .then((response) => {
            //const res=JSON.stringify(response);
            console.log('res: ' + response);
            for (var i = 0; i < response.length; i++) {
                console.log(response[i].Name);
                result =response[i].Name;
                //console.log(res[i].userId);
            }
            console.log("result is"+result);
            return result;
        })
        return result;
    } 
}
 async function myUpdate(url){
    console.log(url);
    let response;
    //const headers = { authorization: "bearer " + User.UserId  }
    //if(data){
        console.log(api_root + url);
        console.log("Update method is calling");
        await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        })
   // }    
}
async function myExercise(url){
    console.log(url);
    let response;
    //const headers = { authorization: "bearer " + User.UserId  }
    //if(data){
        console.log(api_root + url);
        console.log("My Exercise method is calling");
        await fetch(api_root + url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.  
        })
   // }    
}
async function getExercise(url){
    console.log(url);
    let response;
        console.log(api_root + url);
        console.log("Get Exercise method is calling");
        await fetch(api_root + url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.  
        }).then(res => {
            return res.json()
          })
        .then((response) => {
            //const res=JSON.stringify(response);
            console.log('res: ' + JSON.stringify(response));
            //result=JSON.stringify(response);
            for (var i = 0; i < response.length; i++) {
                   console.log(response.length);
                   console.log(i);
                   console.log("madam "+JSON.stringify(response[i].exercise.exercise0));
                   Exercise=JSON.stringify(response[i].exercise.exercise0.Exercise);
                   Time=JSON.stringify(response[i].exercise.exercise0.Time);
                   //result =response[i].Name;
                   //console.log(res[i].userId);
           }
        //     console.log("result is"+result);
        //     return result;
        })
        console.log("Exercise is"+Exercise);
        console.log("Time is"+Time);
    return [Exercise,Time];
} 
export {myFetch,myUpdate,myExercise,getExercise};