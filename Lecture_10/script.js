/* Classes And Object

    // Prototypes

    //   object 
*/

      const employee = {
        
        calcTax() {
           console.log("Income Tax rate is 9%")
        },

        };

        const karanArjun = {

            salary : 50000,
            // calcTax() {
            //     console.log("tax rate is 20%")
            // }
        }
   
       karanArjun.__proto__ = employee ;



    //    Class

    class Car {
        start() {
            return "its Start"
        }
        stop() {
            return "its Stop"
        }
        setBrand(brand) {
            this.brandName = brand ;
        }
    }

    let Scorpio = new Car();
    Scorpio.setBrand("Mahindra");
    let Lexus = new Car();



//   class parent and child

  
class Game {
constructor(name) {
    this.species = "Home"
    this.name = name ;
}
    hello()
    {
        console.log("hello world");
    }
}

class Child extends Game {

    constructor(name) {
        super(name); 
    }
    work() {
        console.log("solve a problem , build something ")
    }
}
let obj = new Child("mahendra");


//  Super KeyWorld  : The super keyworld is used to call the controctor of its parent class to acess the parent's property and method. 

// Task 

let DATA = "Not yet Inform";

class User {
    constructor(name ,email) {
        this.name = name ;
        this.email = email ;

    }

    viewData() {
        console.log("data = ",DATA)
    }
}

let student1 = new User("mahendra","mahendra@gmail.com");
let student2 = new User("rahul","rahul@gmail.com");


// Error Handling 

// try-catch 

let a = 2 ;
let b =7;

try {
    console.log(a+b)
    console.log(a+b)
    console.log(a+b)
    console.log(a+b)
    console.log("hello world ")
} catch (error) {
    console.log(error);
}