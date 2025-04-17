// Spread Operotr in js

// asa karna sa value ka aga index number aya ga
let arra_y = [3, 5, 7, 9, 4, 2, 4, 6436, 34];

let Object = { ...arra_y };

// console.log(Object);



// agr variable ko array ma likh rha ha or is ka output array ma nahi chiya to
const spreading = [1, 2, 3, 4, 5, , 66];
// console.log(...spreading);


// hum apna array ko function ka zaria plusing kara sakta hai

let array_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let convert_obj = { ...array_1 };
// console.log(convert_obj);
function sum(v1, v2, v3, v4 ,v5, v6, v7, v8, v9, v10) {
    return v1 + v2 * v3, v4 + v5 - v6 + v7 + v8 + v9 + v10;
}
// console.log(sum(...array_1));


// react Method In obj

// koi bhi value change kar sakta hai in React And Other
let react_example = {
    name: "React",
    version: "18.2.0",
    author: "facebook",
    features: ["jsx", "hooks", "component", "react-dom"],
    description: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
}
console.log({...react_example, name : "Nextjs"});