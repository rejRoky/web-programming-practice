"use strict";
// DataType 
let id = 5;
let fName = 'Roky';
let lName = 'islam';
let isCompleted = true;
let dob = new Date('04-16-1996');
// Array
let ids = [1, 2, 2, 3, 4, 5];
let arr = [1, 2, true, 'Roky'];
// Tuple
let student = [1, 'Roky', true];
// Tuple Array
let employee;
employee = [
    [1, 'roky'],
    [2, 'abir'],
    [3, 'Maliha']
];
// Union 
let pID;
pID = 10;
pID = 'Roky';
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
// Object 
const user = {
    id: 1,
    name: 'Roky'
};
console.log(user);
const user1 = {
    id: 1,
    name: 'Roky'
};
console.log(user1);
// Type Assertion
let cid = 1;
let customId = cid;
customId = 1;
let customID = cid;
// Funtions
