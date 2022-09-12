//travel application user object

const myAppUser = {
    username : "pradyuman",
    email : "p@gmail.com",
    city : "hyderabad",
    citiesYouLike : "Delhi",
    phoneNo : "0987654321",
    isEmailVerified : false
}

//objectName.properties
console.log(myAppUser.city);

//access the object properties
// object.propertyName

console.log(myAppUser.phoneNo);

//functions
function verifyEmail(email){
    if(email==myAppUser.email){
        myAppUser.isEmailVerified = true;
        console.log("Email is verified...");
        console.log(myAppUser.isEmailVerified);
        return myAppUser.isEmailVerified;
    }
    else{
        console.log("Email is not verified");
    }
}

let accountStatus = verifyEmail("p@gmail.com");
console.log(accountStatus);

// buyNow
function buyNow(){
    console.log("Order has been placed...");
}

if(!accountStatus){
    buyNow();
}
else{
    console.log("please verify first...");
}


