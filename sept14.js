const user = {
    firstname:"Amit",
    'lastname':"Kumar",

   sayMyName :  function(){
    //local scope 
        console.log(this.firstname);
    }
}

user.sayMyName();

let name = "Ankit";
// console.log(this.name); // this is refering to one global object




// ----------------------------------------------
// creating objects using new keyword
//object of person is created 
const person = new Object();

console.log(person); // empty object

// objectName.propertyName ="some value"
person.firstname="Pradyuman";
person.lastname="Kumar";
console.log(person.lastname);
person.course="javascript";


//accessing the object properties
console.log(person.firstname);
console.log(person["firstname"]);
console.log(person.course);

console.log(user["lastname"]);
console.log(user.lastname);


user.isVerified = false;
user.isVerified = true; //object properties are mutable(can be changed) in js...

console.log(user.isVerified);

// delete objectName.propertyName 
delete person.lastname;
console.log(user.lastname);

// Nested Object

const car = {
    brand : "toyota",
    engine : "2700cc",

    //nested objects
     driver : {
        name : "raja",
        age : 27,
        phone : 03264245
     },
     passengers : {
        p1  :"minakshi",
        p2  :  "pradyuman",
        p3  : "rahul"
     }




}

console.log(car.passengers.p1);
console.log(car.passengers["p1"]);
console.log(car["passengers"]["p1"]);