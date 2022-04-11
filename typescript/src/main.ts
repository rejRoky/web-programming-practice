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

let customId = <number>cid;
customId = 1;

let customID = cid as number;

// Funtions
function addNumber(x: number, y: number): number {
    return x + y;
}

console.log(addNumber(52.365, 56));

// Void
function log(message: string | number): void {
    console.log(message);
}

log(26);
log('This is TypeScript');

// Interfaces 
interface UserInterface {
    id: number,
    name: string,
    age?: number,
    readonly phone?: string

}

const user2: UserInterface = {
    id: 1,
    name: 'Roky',


};
console.log(user2);
// user2.phone = '011';

// Interfaces  with Funtion
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
console.log(add(2, 6));

const sub: MathFunc = (x: number, y: number): number => x - y;
console.log(sub(2, 6));


// Class

interface PersonInterface {
    id: number
    name: string
    get(): string
}

// Super Class
class Person implements PersonInterface {
    id: number;
    name: string;


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get() {
        return `My ID : ${this.id} And My Name is ${this.name} `;

    }
}

const Roky = new Person(123, 'Roky');
console.log(Roky.get());


// Subclass
class Employee extends Person {
    position: string;
    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const Abir = new Employee(123, 'Abir', 'Engineer');
console.log(Abir.get());
console.log(Abir.position);



// Generics

function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<String>(['roky', 'Abir', 'Atik']);

numArray.push(6);
//srtArray.push(6);

console.log(numArray);
console.log(strArray);
