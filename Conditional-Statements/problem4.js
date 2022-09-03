// Given stored username and password and input username and password, Print if the user can login or not.

let username = "abc";
let password = "12345";

let reg_username = "abc";
let reg_password = "12345";

if(username == reg_username){
if(password == reg_password){
  console.log("Login successful")
} else {
  console.log("Wrong password");
}
}
else {
    console.log("Wrong credentials");
   
}
