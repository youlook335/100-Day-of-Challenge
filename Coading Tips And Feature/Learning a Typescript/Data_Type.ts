// https://chatgpt.com/c/684cfdc6-75a0-8011-9a0e-301de4f7006a

console.log("This is a Data Type file");

// Data types in TypeScript

// 1) Primitive Data Types 

// 1. Number
let num: number = 42;
// console.log("Number:", num);


// 2. String
let str: string = "Hello, TypeScript!";
// console.log("String:", str);

// 3. Boolean
let Bol: boolean = true;
// console.log("Boolean:", Bol);


// 4. Bigint
let bignt: bigint = 90071992549999999999n; // Note the 'n' at the end to denote BigInt
// console.log("BigInt:", bignt);

// 5. nuull
let nul: null = null;
// console.log("Null:", nul);

// 6. undefined
let undef: undefined = undefined;
// console.log("Undefined:", undef);


// Non-Primitive Data Types

// 1. Object
let person: { name: string, age: number, isStudent: boolean, phone: number } = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    phone: 1234567890
}
// console.log("Object:", person);

// 2. Array
let arr: number[] = [1, 2, 3, 4, 5];
let arr_1: string[] = ["apple", "banana", "cherry"];
// console.table(`"Array of Strings:" ${arr_1} "Array of Number:" ${arr} `);

// 3. Function
function john(a: number, b: number): number {
    return a + b;
}
// console.log("Function Result:", john(5, 10));

// 4. Tuple
let tuple: [string, number, boolean] = ["Alice", 25, true];
// console.log("Tuple:", tuple);

// 5. Class

class Person {
    name: string;
    age: number;
    isStudent: boolean;
    phone: number;
    constructor(name: string, age: number, isStudent: boolean, phone: number) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
        this.phone = phone;
    }
}

const check_person = new Person("Tanver", 25, true, 1234567890);
// console.log("Class:", check_person);

// 7. Interface

interface first_person {
    name: string;
    age: number;
    isstudent: boolean;
    phone: number;
    attendance: boolean;
    address: string;
    weight: number;
}

const data_person: first_person = {
    name: "Mukesh",
    age: 19,
    phone: 1234567890,
    isstudent: true,
    address: "123 Main St",
    attendance: true,
    weight: 70
}
// console.log(data_person);


//  3. Special & Advanced Types

// 1. enum (enumeration)

enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
// console.log("Enum Color:", Color.Red);

// 2. any

// any ایک ایسا type ہے جو کسی بھی طرح کی value کو accept کرتا ہے، یعنی:

// string, number, boolean, array, object، کچھ بھی assign کر سکتے ہیں۔

// TypeScript کی type-checking temporarily disable ہو جاتی ہے۔

let anything: any = "This can be anything"; // Now it's a string
anything = 42; // Now it's a number
// console.log("Any Type:", anything);

// 3. unknown
let value: unknown = "This can be anything too";

if (typeof value === "string") {
    // console.log("Value is a string:", value.toUpperCase());
    // console.log(typeof value);
}

// 4. never
// agr koi bhi asa function hai jo kabhi bhi return nahi hoti, ya kabhi bhi terminate nahi hoti, to usay never type kehte hain. or agr infinte ho to bhi is ko never khta hai

function infi(): never {
   while (true) {
    console.log("This will run forever");
    
   }
}
// console.log(infi());


// 5. void
// hum agr koi bhi value return nahi karte, ya function ka koi return type nahi hota, to hum void type use karte hain

function viod(name:string): void{
    console.log("This function does not return anything:", name);   
}
// viod("Bilal");

// 6. function types

let check_fun:(a:number, b:number) => number;
check_fun = function(a,b) {
    return a + b;
}
// console.log(check_fun(10 , 32));

// 7. unoin type

// ya hma sara dta tpe acces krna ka dta hai ak line ma hum is ma likh da ka string nubmer boolean to wo in sab ko acces kr lata hai
let All_access : string | number | boolean | number[] | string[];

All_access = `This can be a string, number, boolean, or array.`;
// console.log("Union Type In String:", All_access);
All_access = 42;
// console.log("Union Type In Number:", All_access);
All_access = true;
// console.log("Union Type In Boolean:", All_access);
All_access = [1, 2, 3, 4, 5];
// console.log("Union Type In Array:", All_access);
All_access = ["apple", "banana", "cherry"];
// console.log("Union Type In Array:", All_access);

// 8. intersection type
// Intersection type ka matlab hai ke hum do ya zyada types ko combine karte hain, yani ke dono types ki properties ko ek sath use karte hain

type A = {name : string}
type B = {age : number}

type C = A & B; // Intersection type

const persondet:C ={
    name: "John",
    age: 30
}
// console.log("Intersection :", persondet);

// 9. literal type
// Literal type ka matlab hai ke hum kisi variable ko sirf ek specific value assign karte hain, yani ke wo sirf usi value ko hold kar sakta hai

let direction: "left" | "right" | "up" | "down" | "backward";

direction = "left"; // Valid
direction = "right"; // Valid
direction = "up"; // Valid
direction = "down"; // Valid
// direction = "forward"; // Invalid, will cause a TypeScript error

// console.log("Direction is Literal:", direction);

// 10. type aliases
// Type aliases ka matlab hai ke hum kisi type ko ek naya naam de dete hain, yani ke hum us type ko as a new type use kar sakte hain

type channel = {
    name: string;
    subscribers: number;
    isLive: boolean;
}
const youtubeChannel: channel = {
    name: "Tech Channel",
    subscribers: 1000,
    isLive: true
};
// console.log(youtubeChannel);


// 11. Generic types
// Generic types ka matlab hai ke hum kisi type ko generic bana dete hain, yani ke wo kisi bhi type ko accept kar sakta hai
function identitity<T>(arg: T):T{
    return arg;
}
console.log("Generic Type:", identitity<string>("Hello, Generic!"));

// ***************** Complete a Data Type *****************