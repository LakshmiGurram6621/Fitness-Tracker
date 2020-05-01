import {getExercise} from "./myFetch";
//export let Exercise = null;
export async function fetchExercise(user) {
    console.log("coming here too");
    console.log(user);
    const result = await getExercise('/exercise/'+user);
    const Exercise=result[0];
    const Time=result[1];
    console.log("rhere Exercise is"+Exercise);
    return [Exercise,Time];
    // // console.log(user);
    //return Exercise = result;
}