"use strict";
// function addSum(num) {
//   num.toUpperCase();
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addSum("5");
// function addSum(num: number) {
// //   return num + 2;
//   return "Hello"
// }
// better way to write function
function addSum(num) {
    return num + 2;
    //   return "Hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
addSum(5);
getUpper("namami devi narmade");
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("sanjeev", "sanjeev@gmail.com", false);
loginUser("sanju", "baba@gmail.com");
// function getValue(myVal: number) : boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }
// Better way to write the function
var getHello = function (s) {
    return "";
};
var heros = ["Thor", "Spiderman", "Ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
function consoleError(errmeg) {
    console.log(errmeg);
}
function errorHandler(errmsg) {
    throw new Error(errmsg);
}
