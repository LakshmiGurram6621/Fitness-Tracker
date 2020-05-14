import {getexerciseName} from "./myFetch";
//let Exercise,TimeSpent,Calories,Time=[];
export async function getExerciseName() {
    console.log("coming here too");
    let ExerciseName= await getexerciseName('/getExercise');
    console.log("rhere Exercise is"+Exercise);
    return ExerciseName;
}