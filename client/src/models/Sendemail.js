import {sendemail} from "./myFetch";
export async function sendEmail(email,user) {
    console.log("coming here too");
    console.log(email);
    console.log(user);
    await sendemail('/sendmail/'+email+','+user);
}