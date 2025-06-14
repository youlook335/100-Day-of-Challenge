// https://chatgpt.com/c/684cfdc6-75a0-8011-9a0e-301de4f7006a

console.log("This is a Data Type file");

// Data types in TypeScript
// 1. Number
let num: number = 42;
// 2. String
let str: string = "Hello, TypeScript!";
// 3. Boolean
let isTrue: boolean = true;
// 4. Array
let arr: number[] = [1, 2, 3, 4, 5];
// 5. Tuple
let tuple: [string, number] = ["TypeScript", 2023];
// 6. Enum
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Green;
// 7. Any
let anything: any = "Can be anything";
// 8. Void
function logMessage(message: string): void {
    console.log(message);
}
// 9. Null and Undefined
let nothing: null = null;
let notDefined: undefined = undefined;
// 10. Object
let obj: { name: string; age: number } = {
    name: "John",
    age: 30
};
// 11. Never
function throwError(message: string): never {
    throw new Error(message);
}
// 13. Symbol
let uniqueSymbol: symbol = Symbol("unique");
// 14. Intersection Types
type A = { a: number };
type B = { b: string };
type C = A & B;
let intersection: C = { a: 1, b: "TypeScript" };
// 15. Union Types
type StringOrNumber = string | number;
let union: StringOrNumber = "Hello";

// 16. Literal Types
type Direction = "North" | "South" | "East" | "West";
let direction: Direction = "North";
// 17. Type Aliases
type Point = {
    x: number;
    y: number;
};
let point: Point = { x: 10, y: 20 };
// 18. Type Assertions
let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;
