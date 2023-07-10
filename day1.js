// JS - Javascript - scripting language (programming language), it doesnt support OOPS extensively
// ES - ECMAscript  - standards that have been set for JS.
// Node.js  - Runtime Environment where you can build and run JS applications
// TS - Typescript - parent of JS (superset of JS).



// LET, VAR, CONST 
// var - redeclared and reassigned. (Global Scope)
// let - cannot be redeclared but can be reassigned. (Block Scope)
// const - neither can be declared nor reassigned. (Block Scope)


//Functions

// function myFunc(param1, param2){

// }

// const myFunc = (param1, param2) => {

// }

// myFunc(1, 2);

//Anonymous Func

// (function(param1, param2){

// })();

// (() => {})();



// class MyClass {
//     constructor(name){
//         this.username = name;
//     }

//     printName(){
//         console.log('Name is : ', this.username)
//     }

//     accessNameUsingThis(){
//         this.printName();
//     }
// }


// const myObj = new MyClass('Priya'); // creating an obj to access the class and its properties

// myObj.printName();

// let username = 'Akshay';
// let city = 'Chennai';

// console.log(`His name is ${username}, he has grown up at ${city}`);

//SPREAD and REST

// var fruits = ['apple', 'mango', 'banana'];

// var newFruits = ['orange', 'pineapple', 'jackfruit'];

// console.log([...fruits, ...newFruits]); //SPREAD

// function myNewFunc(...params){ //REST
//     console.log('Parameters: ', params);
// }

// myNewFunc(1, 2, 3);
// myNewFunc('Hello');
// myNewFunc('farook', 'farook@gmail.com', 'Bangalore, India', 'Software Engineer');


// Object Destructuring

// let userDetails = {
//     name: 'Abhi',
//     city: 'Mumbai',
//     mobile: '1234567890',
//     email: 'abhi@gmail.com',
//     address: '#10, First Avenue, Mumbai - 1'
// }

// console.log('Email: ', userDetails.email);
// console.log('City: ', userDetails['city']);

// const userName = userDetails.name;

// const { city, mobile, name} = userDetails;

// console.log('Name: ', name);
// console.log('Mobile: ', mobile);


// // Array Destructuring:

// let myArr = ['chennai', 'bangalore', 'mumbai', 'hyderabad'];

// console.log(myArr[0]);
// console.log(myArr[3]);

// const [city1, city2] = myArr;

// console.log('City 1: ', city1)
// console.log('City 2: ', city2)
// // console.log('City 3: ', city3);
// // console.log('City 4: ', city4)

// const userAccountDetails = {
//     username: '',
//     accountNo:'',
//     cardNumber: ''
// }

// // const userCardNumber = userAccountDetails.cardNumber;

// // const akshayCardnumber = userAccountDetails.cardNumber;

// const { cardNumber } = userAccountDetails;

//Property Shorthand: (Object)

// let name = 'Arvind';
// let userAge = 40;

// const userInfo = {
//     name, // name: name
//     age: userAge
// };

// console.log(userInfo.name);
// console.log(userInfo.age);
