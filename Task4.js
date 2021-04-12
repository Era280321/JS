//Task 3.1

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
    throw new Error('Parameter is not a number!');
    }
    console.log (width*height)
    }
          
    try {
        getRectArea(3, 'A'); // VM349:11 Parameter is not a number!
    } catch (exception) {
        console.error(exception.name);
        console.error(exception.message);
        console.error(exception.stack);
    }


//Task 3.2   

function checkAge() {
        let age = prompt("Enter your age", "");
    
        if (age === ""){
            throw new Error('Parameter is undefined!'); 
        }
        else if (isNaN(parseInt(age))) {
            throw new Error('Parameter is not a number!'); 
        }
        else if (parseInt(age)<14) {
            throw new Error('You are too young!'); 
        }
    
        console.log ("You can watch the film!")
        return age;
    
        }
              
        try {
     checkAge();
       
        } catch (exception) {
            console.error(exception.name);
            console.error(exception.message);
            console.error(exception.stack);
        }
/* Results
no text entered:
VM205:23 Error
(anonymous) @ VM205:23
VM205:24 Parameter is undefined!
(anonymous) @ VM205:24
VM205:25 Error: Parameter is undefined!
    at checkAge (<anonymous>:5:19)
    at <anonymous>:20:6
13:
VM214:23 Error
(anonymous) @ VM214:23
VM214:24 You are too young!
(anonymous) @ VM214:24
VM214:25 Error: You are too young!
    at checkAge (<anonymous>:11:19)
    at <anonymous>:20:6

16:
You can watch the film!

"a":
VM220:23 Error
(anonymous) @ VM220:23
VM220:24 Parameter is not a number!
(anonymous) @ VM220:24
VM220:25 Error: Parameter is not a number!
    at checkAge (<anonymous>:8:19)
    at <anonymous>:20:6

*/

//Task 3.3

class MonthException {
    constructor(message){
        this.message=message;
        this.name = "MonthException"
    }
}
function showMonthName(month){
    month=month-1
    let monthesArr =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    if (monthesArr[month] !== undefined) {
        return monthesArr[month];
    } else {
        throw new MonthException ("Incorrect month number");
    }
}

try {
    let myMonth =14
    let monthName = showMonthName(myMonth);
    console.log (monthName);
}
catch (e){
    console.error (e.name, e.message); 
}
// VM36:24 MonthException Incorrect month number

//Task 3.4

function showUser(id){
    if (id<0){
        throw new Error("Id must not be negative "+ id);
    }
    return {id:id};
}

function showUsers(ids) {
   let result =[];
   ids.forEach(function (id) {
       try{
           let person = showUser(id)
           result.push(person);
        } catch (exception){
            console.log(exception.message);
        }
   });
   return result
}
showUsers([7, -12, 44, 22]);

    