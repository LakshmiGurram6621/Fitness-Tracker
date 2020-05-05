import {getExercise} from "./myFetch";
//let Exercise,TimeSpent,Calories,Time=[];
export async function fetchExercise(user) {
    console.log("coming here too");
    console.log(user);
    let Exercise= await getExercise('/exercise/'+user);
    console.log("rhere Exercise is"+Exercise);
    return Exercise;
}