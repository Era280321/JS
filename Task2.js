//Task 2.1
let x = 1;
let y = 2;

let res1 = String(x)+String(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = Boolean(x)+String(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = Boolean(x)&&Boolean(y)// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

//Tas2.2
let TheNumber =7//just for testing, this works also:= prompt("Enter your number");
if(TheNumber%7<=0) {
    console.log(TheNumber + " is devideble to 7");
}else {console.log(TheNumber + " is not devideble to 7");}

if(TheNumber>0 & TheNumber%2<=0) {console.log(TheNumber + " is paired positive number");
}else {console.log(TheNumber + " is NOT paired positive number");}

//Task2.3

const arr = [];
arr[0] = 1;
arr[1] = "string";
arr[2] = true;
arr[3] = null;

console.log(arr.length);
let UserInput = "something"//prompt("Enter something please");
arr[4] = UserInput;
console.log(arr[4]);
delete arr[0];
console.log (arr);

//Task2.4

let cities = ["Rome", "Lviv", "Warsaw"]; 
let item =""
cities.forEach(element =>(item=item+element+"*"));
console.log(item)

console.log(cities.join("*"));

//Task 2.5
let Age =19//just for testing, this works also:= prompt("Enter your age");
if (Age>=18){console.log("You are adult!");
} else { console.log("You are too young!");} 

//Task 2.6
let side1 =19//just for testing, this works also:= prompt("Enter your side1");

let side2 =19//just for testing, this works also:= prompt("Enter your side2");

let side3 =19//just for testing, this works also:= prompt("Enter your side3");
if (side1>0 & side2>0 & side3>0) {console.log((side1*side2*side3).toFixed(3));
} else {console.log("Incorrect data")}

if (side1<=0 || side2<=0 || side3<=0 ) {console.log("Incorrect data");
}else if ((side1**2 == side2**2+side3**2) ||(side2**2 == side1**2+side3**2)||(side3**2 == side2**2+side1**2))
{console.log("rectangular!");
}else {
    console.log("NOT rectangular!");
 }
 

//Task 2.7

let today = new Date();
let Petget = today.getHours();
console.log(Petget)

if (Petget>23|| Petget<=5 ){console.log("Good night");
}else if (Petget>5 & Petget<=11){console.log("Good morning");
}else if (Petget>11 & Petget<=17){console.log("Good day");
}else if (Petget>17 & Petget<=23){console.log("Good evening");
}else {
    console.log("ERROR");
 }

result = (Petget>23|| Petget<=5) ? ("Good night")
:(Petget>5 & Petget<=11) ? ("Good morning")
:(Petget>11 & Petget<=17) ? ("Good day")
:("Good evening")

console.log(result);

