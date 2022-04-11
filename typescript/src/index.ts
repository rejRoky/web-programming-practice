// DataType 
let id: number = 5;
let fName: string = 'Roky';
let lName: string = 'islam';
let isCompleted: boolean = true;
let dob: any = new Date('04-16-1996');

// Array
let ids: number[] = [1, 2, 2, 3, 4, 5];
let arr: any[] = [1, 2, true, 'Roky'];

// Tuple
let student: [number, string, boolean] = [1, 'Roky', true];

// Tuple Array
let employee: [number, string][];
employee = [
    [1, 'roky'],
    [2, 'abir'],
    [3, 'Maliha']
]

// Union 
let pID: number | string;
pID = 10;
pID = 'Roky';

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2);

// Object 
const user: {
    id: number,
    name: string

} = {
    id: 1,
    name: 'Roky'

};
console.log(user);

//
type User = {
    id: number,
    name: string

};

const user1: User = {
    id: 1,
    name: 'Roky'

};
console.log(user1);

// Type Assertion
let cid: any = 1; 

let customId = <number> cid;
customId = 1;

let customID = cid as number;

// Funtions
