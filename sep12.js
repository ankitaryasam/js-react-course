//object methods
const appUser = {
    username : "minakshi",
    pass : "123",

   login :  function() {
        console.log("user is logged in");
    },

    logout : function(){
        console.log("user is logged out");
    },

    calculate : function(){
        //logics for calculating input
    }
}

appUser.login();
appUser.logout();