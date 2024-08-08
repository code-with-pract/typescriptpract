"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var sanju = {
    name: "Baba",
    id: 231,
};
sanju = { username: "Baba atri", id: 231 };
// function getDbId(id: number | string) {
//   // Making some api calls
//   console.log(`Db Id is :${id}`);
// }
getDbId(3);
getDbId("5");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data2 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
