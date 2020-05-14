import {getexerciseName} from "./myFetch";
//let Exercise,TimeSpent,Calories,Time=[];
export async function getExerciseName() {
    console.log("coming here too");
    let ExerciseName= await getexerciseName('/getExercise');
    console.log("rhere Exercise is"+ExerciseName);
    return ExerciseName;
}