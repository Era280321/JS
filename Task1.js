//Task1.2
console.log ("Bozhyk");
//Task1.3
let day;
day = 1;
let code = "JS";
console.log(day+' '+code);
day=code;
console.log(day);

//Task1.4
const NewObject = {
    String: "Iryna", 
    Number: 25,
    Boolean: true,
    Undefined: undefined, 
    Null: null
 };

//Task1.5
//let Adult = confirm("Are you ander 18?");
//console.log( Adult);


//Task1.6
let MainName = "Iryna"
let surname = "Bozhyk"
let group = "JS"
let year = 1996
let Married = true
console.log(typeof MainName,typeof surname,typeof groop,typeof year, typeof Married); 

console.log (year, Married, MainName,surname,group)

let gain;
let age = 5;
age = null;
console.log(typeof gain,typeof age)


//Task1.7
let login = prompt("What is your login?");
let email = prompt("What is your email?");
let password = prompt("What is your password?");
alert("Dear "+login+", your email is "+email+", your password is "+password);


//Task1.8
let min =60
let hour = 60*min
let day = hour*12
let month = day*31

console.log ("there are "+hour+" seconds in hour "+day+" seconds in day "+month+" seconds in month ")