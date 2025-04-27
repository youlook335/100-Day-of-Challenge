//    Data Types:

// Primitive Data Types:
//    1. Number
//    2. String
//    3. Boolean
//    4. Undefined
//    5. Null
//    6. Symbol
//    7. BigInt

//    1. Number
let age = 18;
let point = 2.12;
let Number = 1234567890;


//    2. String
let name = "Unknow";
let commit = "Not Commit This Used a String";

//    3. Boolean
const isLogined = true;
const employeed = false;

//    4. Undefined
let Muhla = undefined;
let city;

//    5. Null
let car = null;

//    6. Symbol
let id = Symbol('123');

//    7. BigInt
let largeNumber = 12345678901234567890n;


// NoN Primitve Data Types:

// 1. Arrays
// 2. Objects
// 3. Functions

// 1. Arrays:
let fruits = [
   'Apple',
   'Mango',
   'Orange',
   'Banana'
];

// 2. Objects:
let details = {
   name: 'John',
   age: 30,
   city: 'New York'
};

// 3. Functions:

const firstfunction = function () {
   // console.log("This is a Run a Function");
}
firstfunction();

// How to Check a Data Types:

// console.log(typeof (commit));

// Variable in js 
// 1. var
// 2. let
// 3. const
// 4. let and const are block scope

// var is a global scope
var work = "This is Used to a Another Types Let's say Var Decelration";

// let is a block scope
let work1 = "This is Used to a Another Types Let's say Let Decelration";

// const is a block scope
const work2 = "This is Used to Another Types Let's say Const Decelration";

// console.table([work, work1, work2]);


// Opeartors in Javascript:

// 1. Arithmetic Operators ✅
// 2. Assignment Operators ✅
// 3. Comparison Operators ✅
// 4. Logical Operators ✅
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (ternary) Operators
// 8. Type Operators
// 9. Relational Operators
// 10. Unary Operators

// 1. Arithmetic Operators
// +, -, *, /, %, ++, --
// 2. Assignment Operators
// =, +=, -=, *=, /=, %=, <<=, >>=, &=, |=, ^=, **=
// 3. Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators
// &&, ||, !
// 5. Bitwise Operators
// &, |, ^, ~, <<, >>
// 6. String Operators
// +, +=, ==
// 7. Conditional (ternary) Operators
// ? :
// 8. Type Operators
// typeof, instanceof

// Arithmetic Opearotor in Javascript

let a = 40;
let b = 4;
// Values Addition +
// Values Subtraction -
// Values  Multiplication *
// Values Division /
// Values Modulus (Remainder) %
// Values Exponentiation (Power) **
// Values Increment ++
// Values Decrement --
// console.table("This is a Arithmetic Opearotor",[a + b, a - b, a * b, a / b, a % b]);
// console.log("a++, b++, a--, b-- ,a ** b =",a++, b++, a--, b--, a ** b);
// Increment & Decrment operator
// ++a Pre-Increment: phela bdhao phir is ko used karo
// a++ Post-Increment: phela is ko used karo phir bdhao
// --a Pre-decrment: phela kam karo phir is ko used karo
// a-- Post-decrment: phela is ko used karo phir kam karo


// Assignment Operators in Javascript

let c = 40;
let d = 20;
// = Assign
// += Add and assign
// -= Subtract and assign
// *= Multiply and assign
// /= Divide and assign
// %= Modulus and assign
// **= Exponent and assign
// console.table([c += d, c -= d, c *= d, c /= d, c %= d, c **= d]);
let Assignment = 20;

// 1)
let addassign = 10;
// console.log(addassign += Assignment);

// 2)
let subassign = 10;
// console.log(subassign -= Assignment);

// 3)
let mulassign = 10;
// console.log(mulassign *= Assignment);

// 4)
let divassign = 30;
// console.log(divassign /= Assignment);

// 5)
let modassign = 30;
// console.log(modassign %= Assignment);

// 6)
let expassign = 1.5;
// console.log(expassign **= Assignment);

// Comparison Operators

// These compare two values and return true/false:
// == Equal to (value only) check for Simple Equal
// === Equal value and type check for data simple equal and type e.g = (primitve, Non Primituve)
// != Not equal (value only) check for Simple Not Equal
// !== Not equal value or type check for simple not equal and data type e.g = (primitve, Non Primituve)
// > Greater than
// < Less than
// >= Greater than or equal
// <= Less than or equal

// console.table([c == d, c === d, c != d, c !== d, c > d, c < d, c >= d, c <= d]);

let Comparison = 20;

// 1)
let equal = 10;
// console.log(equal == Comparison);

// 2)
let notequal = 40;
// console.log(notequal != Comparison);

// 3)
let equaltype = 40;
// console.log(equaltype === Comparison);

// 4)
let notequaltype = 20;
// console.log(notequaltype !== Comparison);


// 5)
let greaterthan = 5;
// console.log(greaterthan > Comparison);
// agar greaterthan chotta ha to false da ga agar Comparison chotta ha to true da ga
// agar greaterthan chotta ha to true da ga agar Comparison chotta ha to false da ga


// 6)
let lessthan = 15;
// console.log("Line No: 233",lessthan < Comparison);
// agar lessthan chotta ha to true da ga agar Comparison chotta ha to false da ga
// agar lessthan bara ha to false da ga agar Comparison bara ha to true da ga


// 7)
let greaterorequal = 20;
// console.log(greaterorequal >= Comparison);
// agar greaterthanor equal chotta ha to false da ga agar Comparison chotta ha to true da ga dono braber ha to true hoga
// agar greaterthanor equal chotta ha to true da ga agar Comparison chotta ha to false da ga


// 8)
let lessorequal = 20;
// console.log("Line No: 247",lessorequal <= Comparison);
// agar lessthanoreual chotta ha to true da ga agar Comparison chotta ha to false da ga agar dono braber ha to true da ga 
// agar lessthanoreual bara ha to false da ga agar Comparison bara ha to true da ga

// Logical Operators

// Used to combine multiple conditions:
// && AND - true if all conditions are true
// || OR - true if at least one condition is true
// ! NOT - reverses the condition

let Logical = 20;

// 1):
// && Opearotrs in js

let ANDAND = 50;
// console.log(ANDAND >= Logical && Logical != ANDAND);
// Agr ya dono Value True hoi to ya true return kara ga
// Agr is ma sa ak na bhi flase diya to pora flase hoga

// 2):
// || Opearotrs in js
let OROR = 19;
// console.log(OROR < Logical || Logical == OROR);
// Agr is ma sa ak bhi true ha to ya pora true hoga
// Agr is ma sa ak bhi flase hoa to true da ga 

// 3):
// ! NOT Opearotrs in js
console.log(!false);
// Agr koi value true ha to is ko fasle kar da ga
// Agr koi value false ha to is ko true kar da ga

