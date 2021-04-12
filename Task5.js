//Task 5.1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};


function propsCount(currentObject){let count = 0;

    for(let key in mentor) {
        ++count;
    }
    
    console.log(count);}

propsCount(mentor);//3

//Task 5.2

let employee = new Object(); // Creates an empty object
employee.firstName = "Peter";
employee.lastName = "Peterson";
employee.position = "developer";
employee.color = "pink";
employee.level = "lead";

function showProps(obj) {
    console.log(Object.keys(obj));
    console.log(Object.values(obj));
}


showProps(employee)//(5) ["firstName", "lastName", "position", "color", "level"]
//(5) ["Peter", "Peterson", "developer", "pink", "lead"]

//Task 5.3

class Person {
       constructor(name, surmane) {            
           this.name = name;
           this.surmane = surmane;
       }
       showFullName() {            
           console.log(this.name +" "+this.surmane);
       }
    }

    class Student extends Person {
        constructor(name, surmane, year) {            
        super(name, surmane);
        this.year = year;
    }
       showFullName(midleName) {            
           console.log(this.name +" "+this.surmane+" "+midleName);
    
       }
      showCourse(year){
          let result = new Date().getFullYear()-this.year+1
          if (result>6){console.log("You are not a student anymore!")}
          else{console.log(result)}
        
      }
    }

      let stud1 = new Student("Petro", "Petrenko", 2015);
      console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
      console.log("Current course: " + stud1.showCourse()); //"You are not a student anymore!"
      

 //Task 5.4
    
 class Worker {
    #experience = 1.2;
       constructor(fullName, dayRate, workingDays ) {            
           this.fullName = fullName;
           this.dayRate = dayRate;
           this.workingDays = workingDays;

    }
              showSalary() {            
                   
            console.log(this.dayRate*this.workingDays);
            return this.dayRate*this.workingDays
               }
            
               showSalaryWithExperience() {
                console.log(this.dayRate*this.workingDays*this.#experience);
                 return this.dayRate*this.workingDays*this.#experience;
               }   
        
               get getE() {
                return this.#experience;
               } 

               set setE(setExp) {
                this.#experience = setExp;
            }
        }

        let worker1 = new Worker("John Johnson", 20, 23);
        console.log(worker1.fullName);                 
        worker1.showSalary();
        console.log("New experience: " + worker1.getE);
        worker1.showSalaryWithExperience();
        worker1.setE = 1.5;
        console.log("New experience: " + worker1.getE);
        worker1.showSalaryWithExperience();

        let worker2 = new Worker("Tom Tomson", 48, 22);
        worker2.setE = 1.2;
    
        console.log(worker2.fullName+" salary:"  +worker2.showSalaryWithExperience()) 


        let worker3 = new Worker("Andy Ander", 29, 23);
        worker3.setE = 1.1;
        
        console.log(worker3.fullName+" salary: " +worker3.showSalaryWithExperience());
  
        

        var sorted =[worker1,worker2,worker3];
        sorted.sort(function(a, b) { 
            return a.getE - b.getE;
        })
        
        for(var i in sorted)
            console.log(sorted[i].fullName+ " salary: "+ sorted[i].showSalaryWithExperience())


        /*Andy Ander salary: 733.7
VM107:57 Tom Tomson salary: 1267.2
VM107:57 John Johnson salary: 690
*/

// Task 5.5


class GeometricFigure {
    constructor(b,h){
    this.b= b;
    this.h= h;

    }
    getArea() {
return 0;
}
toString() {
return Object.getPrototypeOf(this).constructor.name;
}
}

class Triangle extends GeometricFigure {
    constructor (b,h)
    { super(b,h);
        
    }

    getArea(){
      
        //console.log ((this.b*this.h)/2)
        return (this.b*this.h)/2;
    }  
}


class Square extends GeometricFigure {
    constructor (b){
        super(b);

    }
    getArea(){
      
       // console.log (this.b*this.b)
        return this.b*this.b
    }  
}

class Circle extends GeometricFigure {
        constructor (b){
            super(b);
            }
    
        getArea(){
           
            //console.log  ( ((this.b*this.b)*Math.PI))

        return  ((this.b*this.b)*Math.PI)
    }  
}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];


function handleFigures(){
    for (let i = 0; i < figures.length; i++) {
        if(figures[i] instanceof GeometricFigure ){
            console.log ("Geometric figure: "+ figures[i].constructor.name+" - area: "+figures[i].getArea() )
        }
    }

    var initialValue = 0;
    var sum= figures.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.getArea();
    },initialValue)
    console.log(sum)
}

handleFigures (figures)

/*
 Geometric figure: Triangle - area: 10
 Geometric figure: Square - area: 49
 Geometric figure: Circle - area: 78.53981633974483
 137.53981633974485

 */