console.log('Hello world');
console.error('This is error');
console.warn('this is warning');

// Variable 
/// var, let, const
/// let , const  in ES6/ES2015

let age = 30;

console.log(age);
age++;
console.log(age);

const studentID = 2121;
console.log(studentID);

///studentID = 2332;  // as like final at java
console.log(studentID);

// Datatype
/// String, Number, Boolean, null, undefined, Symbol (add in es6)

const name = 'Roky';
const id = 26;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

console.log(name);
console.log(id);
console.log(isCool);
console.log(x);
console.log(y);
console.log(z);

console.log(typeof name);
console.log(typeof id);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// Concatenation
console.log('My name is' + name + '. I my id :' + id);

// Template String 
const hello = `My name is ${name}. I my id : ${id}`;
console.log(hello);

// String propaties and Method
const s = 'Hello world';
console.log(s.length);

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 8));
console.log(s.split(' '));


// Arrays 
const A = new Array(1, 2, 3, 4, 5);
console.log(A);

const fruits = ['apple', 'mango', 'banana', 10, true];
console.log(fruits);
console.log(fruits[2]);

fruits.push(1000);
console.log(fruits);

fruits.pop();
console.log(fruits);


console.log(Array.isArray('hello'));
console.log(fruits.indexOf(10));


// Object Literals

const student = {

    nameStudent: 'Roky',
    idStudent: 121221,
    dobStudent: '16-04-1996',
    cgpaStudent: 3.11,
    addressStudent: { /// Embded Object
        city: 'Dhaka',
        conntry: 'Bangladesh'

    }

}

console.log(student);
console.log(student.nameStudent, student.idStudent);
console.log(student.addressStudent);


const { // ES6
    nameStudent,
    idStudent,
    addressStudent: {
        city
    }
} = student; // pull from object and make it variable 

console.log(nameStudent);
console.log(city);

student.email = 'ing@roky.com';
console.log(student);



// Loop 

// For Loop
for (let i = 0; i < 10; i++) {
    console.log(`for loop number : ${i}`);
}

// While Loop
let i = 1;
while (i < 10) {
    console.log(`while loop number : ${i}`);
    i++;
}



// Array Of Objects 

const toDos = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Go Office',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Contect boss',
        isCompleted: true
    }

];

console.log(toDos);
console.log(toDos[1].text);


// make it json format
const toDosJSON = JSON.stringify(toDos);
console.log(toDosJSON);

for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i]);
}

for (let i = 0; i < toDos.length; i++) {
    console.log(toDos[i].id);
    console.log(toDos[i].text);
    console.log(toDos[i].isCompleted);
}

// For Of Loop /// New For loop

for (let todo of toDos) {
    console.log(todo.text);
}


// forEach, map, filter

toDos.forEach(function (todo) {
    console.log(todo.text);
});

//map
const todoText = toDos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = toDos.filter(function (todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//filter with map // make fner
const todocompleted = toDos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
console.log(todocompleted);