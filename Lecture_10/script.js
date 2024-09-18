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


   