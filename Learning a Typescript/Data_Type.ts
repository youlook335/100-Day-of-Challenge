// https://chatgpt.com/c/684cfdc6-75a0-8011-9a0e-301de4f7006a

console.log("This is a Data Type file");

// Data types in TypeScript

// This is Primitive Data Types in TypeScript
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


// Non-Primitive Data Types in TypeScript

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
console.table(`"Array of Strings:" ${arr_1} "Array of Number:" ${arr} `);

// 3. Function
function john(a: number, b: number): number {
    return a + b;
}

console.log("Function Result:", john(5, 10));

// 4. Tuple
let tuple: [string, number, boolean] = ["Alice", 25, true];
console.log("Tuple:", tuple);

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

const check_person = new Person("Tanver", 25,true ,1234567890);
console.log("Class:", check_person);

// 6. Enum
// 7. Interface
// 8. Type Alias





// | نمبر | Type             | مثال / تفصیل                                   |          |
// | ---- | ---------------- | ---------------------------------------------- | -------- |
// | 8    | `object`         | `{ name: string, age: number }`                |          |
// | 9    | `tuple`          | `[number, string]`                             |          |
// | 10   | `enum`           | `enum Color { Red, Green, Blue }`              |          |
// | 11   | `any`            | `let x: any = 5;` (disable type checking)      |          |
// | 12   | `unknown`        | `let x: unknown = value;`                      |          |
// | 13   | `never`          | `function throwError(): never { throw ... }`   |          |
// | 14   | `void`           | `function log(): void { console.log("..."); }` |          |
// | 15   | `function types` | `(a: number, b: number) => number`             |          |
// | 16   | `union` types    | \`string                                       | number\` |
// | 17   | `intersection`   | `A & B`                                        |          |
// | 18   | `literal types`  | \`"on"                                         | "off"\`  |
// | 19   | `type aliases`   | `type User = { name: string }`                 |          |
// | 20   | `interfaces`     | `interface User { name: string }`              |          |
// | 21   | `classes`        | `class Person {}`                              |          |
// | 22   | `generics`       | `<T>(value: T): T => value`                    |          |
