// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


let year = 2005;
let age = 2022 - year;

age>=13 && age<=19 ? console.log("Tennage")
  : age>=20 && age<=29 ?
console.log("Twneties")
  :console.log("NA");