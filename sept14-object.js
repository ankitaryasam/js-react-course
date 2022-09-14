//object accessors

const user = {
    firstname : "Minakshi",
    lastname : "kumari",
    course : "",

    //setter method
    set setCourse(courseName){
        this.course = courseName;
    },

    //getter
    get fullName(){
        return this.firstname + this.lastname;
    },

    x : function(){   
        return this.firstname + this.lastname;
    } 
}
   user.setCourse="javascript";
   console.log(user.course);

   console.log(user.fullName);

   