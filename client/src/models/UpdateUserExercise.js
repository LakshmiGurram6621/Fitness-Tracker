import {myUpdate} from "./myFetch";

export let CurrentUser = null;

export async function updateUserExercise(exercise,time,calories,user) {
    console.log("inside Update user exercise method");
    console.log(exercise);
    console.log(time);
    console.log(calories);
    console.log(user);
    console.log("above line is executed");
    //const user = await myUpdate('/users/login/'+name+','+email+','+password) ;
    // console.log("user data is");
    // console.log(user);
    // return CurrentUser = user;
}