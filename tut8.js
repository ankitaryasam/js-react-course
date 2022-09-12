const user = {
    firstname  : "pradyuman",
    lastname : "kumar",

  seeDetails :   function(){
    let firstname = "minakshi";
    let lastname = "kumari"
        console.log(`My name is ${user.firstname} ${user.lastname}`);
    },

   sayMyName : function(){
    console.log(`My name is ${this.firstname} ${this.lastname}`);
    }
}

user.seeDetails();
user.sayMyName();

//this-----> current object-------> global object
console.log(this.firstname);
// here undefined will come because in global object,
 // there is no firstname defined