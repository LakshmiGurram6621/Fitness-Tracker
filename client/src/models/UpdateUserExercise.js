import {myExercise} from "./myFetch";

export let CurrentUser = null;
export async function updateUserExercise(exercise,time,calories,user) {
    console.log("inside Update user exercise method");
    console.log(exercise);
    console.log(exercise.length);
    console.log(time);
    console.log(calories);
    console.log(user);
    console.log("above line is executed");
    const execise = await myExercise('/exercise/'+exercise+','+time+','+calories+','+user);
}