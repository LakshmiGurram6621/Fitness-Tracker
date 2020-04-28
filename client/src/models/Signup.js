import {myUpdate} from "./myFetch";

export let CurrentUser = null;

export async function Signup(name,email,password) {
    console.log("inside signup method");
    console.log(name);
    console.log(email);
    console.log(password);
    const user = await myUpdate('/users/login/'+name+','+email+','+password) ;
    // console.log("user data is");
    // console.log(user);
    // return CurrentUser = user;
}