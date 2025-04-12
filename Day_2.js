
// Functions, Scope, Hoisting in JavaScript

// Functions

function addition() {
    // console.log("Simple Result =", 10 + 5);
}
addition();


// Function With 👇 parameters
function AddtwoNum(num1, num2) {
    // console.log(num1 + num2);
}
// This is a function Argument pass 👇
AddtwoNum("Using Parameter Result = ", 21, 12);


// Function With Parametres And Return Fun
function addsome(add1, add2) {
    return add1 + add2
}
const result = addsome(12, 2);

// console.log("Using Parameter And Using Return Fun Rsult = ", result);

// Function With Parametres And Declare Variable and Return fun

const First_fun = function (Num1, Num2, Num3) {
    let Some_Value = Num1 + Num2 + Num3;
    return Some_Value;
    console.log("Try To This Return Down Try KeyWord");
    // is ma ak role ya hai ka ap return sa phela kcuh likha ga execute ho jaya gi lakin return ka baad nahi hogi jaisa is ma dekhya gya hai 

}
const Last_Result = First_fun(12, 31, 42);
// console.log("Parametres And Inculude Variable and Return fun =", Last_Result);


// How to a User loggined

// Agr username na likha jaye 👇 toh ye msg show karega
function logged(username = "Username") {
    // agr ma  yha par koi name ☝ likh do to mara if condition kisi kam ki nhai hai
    if (!username) {
        console.log("Please Enter Your username");
        return
    }
    return `${username} just loggined in`
}
// console.log(logged("i will Be come back"));
// agr username yha ☝ likho to pheal ya chla ga aggr yha nahi hai to opar show kara ga


// Rest opearator/parameter and reduce method in js
function Cartoption(...args) {
    // agr ap ko bhut sara ☝ print karan ho to ya opar wala method use kara ... kar ka
    return args;
    // ya karna sa sirf valur print hogi
}
// console.log(Cartoption(20, 12, 43, 21, 32, 12, 21));


// How to Insert a object in function 
// Try method 1
const user = {
    name: "Aman",
    ages: 21,
    gender: "male"
}
function userinfo() {
    console.log(`name is ${user.name} and is age ${user.ages} and is ${user.gender}`);
}
// userinfo(user);

// Try method 2
const Info = {
    name: "khan",
    ages: 31,
    gender: "male"
}
function inforamtionuser(username) {
    console.log(`name is ${username.name} and is age ${username.ages} and is ${username.gender}`);
}
// inforamtionuser(Info);

// How to Insert a Arrays in function 

const array_in_fun = [300, 120, 430, 120, 320, 60, 80]
function Check_array(get) {
    // hum is ma ya dekh sakta ha ka is ma hum index number sa array ka acess la sakta ha
    return get[2];
    // jaisa yha par ma na liya hai 3 ka 
    // or indx ma number 0 sa start hota hai
}
// console.log(Check_array(array_in_fun));


// Use of This keyword in js 

const school_data = {
    username: "Iqbal hussion",
    price: 990,
    phone: "03******",
    welcomemsg: function () {
        // console.log(`${this.username} Welcome to a website` );
        // agr ap is ko 👇 asa likha ga to ap ka pora obj aya ga jo ka is {Blocks ka andr hoga} agr bhai hoga to
        // console.log(this);
    }
}
// asa yha thid keyword use karna sa hota hai 
school_data.welcomemsg();
school_data.username = "irsahd Hussion";
school_data.welcomemsg();
// Agr ya bhai hoga to sirf {}ya print hoa aya ga Q ka is ma koi array ha hi nahi
// console.log(this);


// Arrow Function in js

// Simple Type a Arrow Function
() => { }

const func_arrow = () => {
    console.log("Thid is a Arrow function");
}
// func_arrow();

const summing = (num1, num2) => {
    return num1 + num2;
}
// console.log(summing(12, 21));

// agr hum is ma sirf ek line likha to hum is ma return likha sa bhi likha ja sakta ha
// Try to this a Number
const oneline = (num1, num2) => (num1 + num2)

// console.log(oneline(12, 1));

// Try to this a string/obj

const string_method = () => ({ username: "Hussion", Age: 32, city: "Lahore" });
// console.log(string_method());


// IIFE (Immediately Invoked Function Expression) in js 

// Simple Fun
(function IIFE() {
    // console.log("This is a IIFE");
}());

// Adding Number
(function IIFE2(num1, num2) {
    // console.log("This is a Simple", (num1 + num2));
    return num1 + num2;
}(12, 21));

// Arrow Fun in IIFE
((num1, num2) => {
    // console.log("This Using a Arrow Fun", (10, 21));
    return (num1 + num2);
})();

// Simple IIFE With Return 
const House = (function (sum1, sum2, sum3) {
    return sum1 + sum2 + sum3;
})(21 , 53 ,23)
// console.log(`${House} This is a IIFE and return fun`);