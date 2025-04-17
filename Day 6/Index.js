// ES6+ Destructing in Array

// How to Merge a Array And Aray Change
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let chang_1 = arr[0] = "Malik Awan";
// console.log(chang_1);
// console.log(arr);

// method 2 
// ap variables ma hi bna ka rakhta ha ka itni value Print ho
// let [a, b, c] = arr;
// console.log(a, b ,c);


// Ap Array ma sa hi value ko hie kar sakta ho
let [a, , , , ...rest] = arr;
// console.log(a);

// agr ap chat ho ka jo variable ma define ha a bs wahi aya to a ko print karao agr chta ho ka a ka ilaqa ay to rest ko karao agr chta ho ka sab ho to arr karao
// console.log(rest);
// console.log(arr);


// ES6+ Destructing in Object

const obj = {
    name: "Malik Awan",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Canada"
}
const { name, age, gender, city, country } = obj;
console.log(name, age, gender, city, country);