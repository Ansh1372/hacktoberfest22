// jshint esversion:6

exports.getdate =function (){
    var today = new Date();
    const birthday = new Date("29 august , 2002 23:45:36 ")
    const day1 = birthday.getDate();
    var currentday = today.getDay();
    var day = "";
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-US" , options);
    return day;
}
exports.getday = function (){
    var day = "";
    var options = {
        weekday:"long",
        
    };
    var day = today.toLocaleDateString("en-US" , options);
    return day;
}