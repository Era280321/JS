//Task 3.1

let arr = [2, 3, 4, 5] 
let i=0
let counter = 1
while(i<arr.length){
counter*=arr[i];
++i;
}
console.log(counter) //120

counter=1
for(i=0; i<arr.length; i++){
counter*=arr[i]   
}
console.log(counter) //120

//Task 3.2

for(let count = 0; count < 15; count++) { 
    if(count%2<=0){ console.log (count+ " is even");
    }else{ console.log (count+ " is odd");  
  }}

//Task 3.3


function randArray(k) {
let arr = [];

for(let count = 0; count < k; count++) { 
    arr[count] = Math.floor(Math.random() * 500);
  }
console.log (arr)
}

randArray(4); //(4) [480, 460, 426, 276]


//Task 3.4
/*

function raiseToDegree(a,b) {

    if(Number.isInteger(a) & Number.isInteger(b)) {result=a**b}
        else {result="failed"}
        console.log(result)
        
        return result;}


let num1 = parseInt(prompt ("Enter your number 1"));
let num2 = parseInt(prompt("Enter your number 2"));
raiseToDegree(num1,num2) // Result: 8
*/


/*
function findMin() {
    let result = 1;
    let arr=[]
    for (let i = 0; i < arguments.length; i++) {
              arr[i]= parseInt(arguments[i]);

    }
    result = Math.min(...arr)
    console.log(result);
 return result
}
*/

//Task 3.5


function findMin() {
    result = Math.min(...arguments)
    console.log(result);
 return result
}

findMin(4,5,5,1)//1
 

//Task 3.6

function findUnique(array) {
    let valuesAlreadySeen = []
  
    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (valuesAlreadySeen.indexOf(value) !== -1) {
        console.log (false)
        return false
      }
      valuesAlreadySeen.push(value)
    }
    console.log (true)
    return true
    
  }
let arr12 = [2,2,3];
let arr13 = [1,2,3];
findUnique(arr12)  //false
findUnique(arr13)  //true

//Task 3.7


function lastElem(arr,numberValue) {
    if (numberValue === undefined) {
        result = 1;
        result = arr[arr.length - 1]
    
    } else {result = arr.slice(Math.max(arr.length - numberValue, 0))
 }
 console.log(result);
 return result
}

let arr15 = [1,2,3,"d","r","a","d",4];
lastElem(arr15,3)//(3) ["a", "d", 4]


//Task 3.8

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("i love java script");//I Love Java Script
