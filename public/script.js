"use strict";
function log(any) {
    return console.log(any);
}
var userDetails = function (id, user) {
    log("User id id " + id + " , name is " + user.name + " & age is " + user.age);
};
var sayHello = function (user) {
    log("Hello " + (user.age > 50 ? "Sir" : "Mr.") + " " + user.name);
};
