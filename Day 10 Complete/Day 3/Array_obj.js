// Arrays & Objects - Basics + Methods  


// Arrays in js 
// arrays ma Number 0 sa start hota ha jaisa 0 sa start hota ha agr ap ka pas 10 number ha to arrays is ko 9 count kara ga Q ka 0 sa start hoga
// Arrays ak collection of data hai

// Simple arryas in javascript
let string_1 = [
    "Banana", "Mango", "Databse", "SQL", "HTMl", "CSS", "JS", "React", "Angular", "Vue", "Node", "Express", "MongoDB", "PHP", "Laravel", "Python", "Django", "Ruby", "Ruby on Rails"
]

let array_1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12
]
// console.log(array_1);

// check a Arrays Length

// console.log(array_1.length);

// Find first index of value

// console.log(array_1[1]);
// console.log(array_1[4]);
// console.log(array_1[0]);


// Push Methods in js
// Add element at the end of array

// 1)
// array_1.push(11);
// console.log(array_1);

// pop Method in js
// Remove element from the end
// array_1.pop();

// Remove element from the end in multiple so easy
// 2)
// array_1.pop();
// array_1.pop();

// console.log(array_1);

// unshift()
// Add element at the start
// 3)

// array_1.unshift(90);
// console.log(array_1);

// shift()
// Remove element from the start
// 4)

// array_1.shift();
// console.log(array_1);

// includes()
// 5)
// Check if value exists ya dekha ga ka is ma jo value likh rha ha kiya wo arra ma ha ya nahi agr ha to true nahi to false

// console.log(string_1.includes("JS"));

// 6)
// IndexOf()
// Find first index of value ya ya check karta ha ap koi word likho is ka btaya ga ka index number kiya hai is ka 

// console.log(string_1.indexOf("Ruby"));
// console.log(array_1.indexOf(3));

// 7) join()
// - Use: Join array into string jo bhi array ha is ko convert string

const check_number = array_1.join();
// console.log(check_number);
// // Method 2
// console.log(string_1.join());
// method 3
// console.log(array_1.join(""));


// 8) Slice Copy part of array (doesn't change original)
// mara Slice ka asl array ko Slice karna ka baad change nahi hoa  ap is ko slice phela use kar lata ha or baad ma array ko print kraya ga to aray sam to sam hoga


let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Cherry", "Peach", "Pear"];

// console.log(fruits.slice(0, 5));

// 9) splice() Add/Remove items at any position

// agr is ma ap koi value yha sa htata ha ya lagata ha to wo hat jati/addjati hai na ka slice ki trah karhi rhti hai

const splice_array = fruits.splice(0, 3,  "Kiwi", 'blackbox', 21,true ,"Okay" );
// is ma ap pheli do vlues sa data itna la sakta ha jitna chiya hai or dosri values sa ap data add kar sakta ha or is ka baad isi variable ko print karana hoga
// console.log(splice_array);
// console.log(fruits);

// 10) lastIndexOf() Find last index of value

// ap ka pass bhut sara data hai or ap is ka index malom karna chata ho to ap is ma sa kisi ka name asa likha is ka indx ap ka pass a jaya ga or agr ap koi value do baar likha ha to ap ka pass uska last indx a jaya ga
let lastIndexOf = string_1.lastIndexOf("CSS");
let lastIndexOf1 = string_1.lastIndexOf("React");
// console.log(lastIndexOf);
// console.log(lastIndexOf1);


// 11) . concat()
// - Use: Join arrays
// Agr concat ko use karta to array ka andar array create nahi hota ya aps ma merge ho jata hai agr koi or use kara jaisa ka push to array ka andr arry create hota hai
let Super_1 = ["Thar", "Spiderman", "Ironman"];
let Super_2 = ["Batman", "Superman", "Flash"];

const concat_array = Super_1.concat(Super_2);
// console.log(concat_array);

// method 2

const all_heros = [...Super_1, ...Super_2];
// console.log(all_heros);
// agr concat use nahi karta to ap asa kar sakta hai... laga ka

// 12) flat()
let another = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

// Use: flat() method nested arrays ko flatten karta hai. Yani agar aapke array ke andar arrays hain (sub-arrays), toh flat() unko ek single array mein convert kar deta hai.

const flat_array = another.flat(Infinity);
//asa kar ka array ka andr array print kara sakta hai chiya jitna ho multiple array
// console.log(flat_array);


// 13) Array.isArray()
// Yeh method check karta hai ki koi value array hai ya nahi. Agar value ek array hai, toh true return karta hai.Agar value array nahi hai, toh false return karta hai.
// console.log(Array.isArray("Node.js"));


// 14) Array.from() Method:
// Use: Array.from() method ek iterable object (jaise string, set, etc.) ko ek array mein convert karta hai
// is ko jo value do ga wo is ko array ma convert kar deta hai
// console.log(Array.from("Node"));
// console.log(Array.from({name: "Hitesh"})); // intersting

// 15)
// ya new cheez hai is ko use kar ka ak new array banat hai is ko phir run krta hai
let score_1 = 100;
let score_2 = 200;
let score_3 = 300;

// console.log(Array.of(score_1, score_2, score_3));




// +++++++++++++++++++ Objects in js +++++++++++++

// Literal Obj in js
const obj_1 = {
    name: "Subhan",
    // agr ap space dalna chta ha to ap is ko string ma dal da
    'full name' : "Code with Harray Ahmed " ,
    channel: "CodeWithHarry",
    course: "JavaScript",
    is_Married: true,
    email : "subhan@gmail.com",
    // How to Access a Symbol in obj
    mySymbol : "12symbol",
}
// How to use a obj print 
// 1)
// agr value asa print karani ho to mysymbol ko obj or string ma dala
// console.log(obj_1['mySymbol']);
// 2) ya easy or simple method hai
// console.log(obj_1.course);
// 3) agr obj ma space ha to asa print kar sakta hai
// console.log(obj_1["full name"]);


// how to freez a obj
// is ko freez karna ka baad koi bhi freez ka bad value access nahi kar sakta
// Object.freeze(obj_1);
// console.log(obj_1);


// How to a Old obj value change
// console.log(obj_1);
// obj_1.email = "subhanahmed@gmail.com";

// console.log(obj_1);

// how to use a function in obj

// obj_1.greeting = function(){
//     console.log(`Hello welcome to my JS channel And Learning is obj`);
// }
// console.log(obj_1.greeting());


// How to use this method in obj

// obj_1.greeting2 = function(){
//     console.log(`Hello welcome to my ${this.course} channel ${this.channel} And Learning is obj`);
// }
// console.log(obj_1.greeting2());

// How to use a obj in a obj
const regular = {
    name : "Subh",
    fullname : {
        firstname : "Subhan",
        lastname : "Ahmed"
    }
}
// console.log(regular);
// console.log(regular.name);
// console.log(regular?.fullname);
// console.log(regular.fullname.firstname);
// console.log(regular.fullname.lastname);


// How to comabin a obj

const obj_2 = {
    1 : "a", 2 : "b"
}

const obj_3 = {
    3 : "c", 4 : "d"
}

const obj_4 = {
    5 : "e", 6 : "f"
}

const last_result = {...obj_2,...obj_3,...obj_4};
// console.log(last_result);

// Method 2 to assing a value
// ap ko assign use karta waqt currly bracket zarror lagaya kara
const last_result2 = Object.assign({},obj_2,obj_3,obj_4);
// console.log(last_result2);

//  how to find a array key and values

// console.log(Object.keys(obj_1));
// console.log(Object.values(obj_1));
// ya use karna sa har data array ka andar jata hai har ak value or is ki pair value print ho jati hai
// console.log(Object.entries(obj_1));


// How to use a arrays in a obj

const obj_5 = [
    {
        id : 1,
        name : "Subhan",
        email : "subhan@gmail.com"
    },
    {
        id : 2,
        name : "Ahmed",
        email : "ahmed@gmail.com"
    },
    {
        id : 3,
        name : "Shahid",
        email : "shahid@gmail.com"
    },
    {
        id : 4,
        name : "Ali",
        email : "ali@gmail.com"
    },
    {
        id : 5,
        name : "Raza",
        email : "raza@gmail.com"
    },   
]

// asa karna sa ap array ka andr value ko change kar sakta ho
obj_5[3].name = "Tanveer"
obj_5[3].email = "tanveer@gmail.com"
// console.log(obj_5);

// Agr ko dekhna ho ka is name ki property ha to ap asa check kar sakta hai
// or is ka answer true ya false dega
// console.log(obj_1.hasOwnProperty("full name"));
// console.log(obj_1.hasOwnProperty("email"));
// console.log(obj_1.hasOwnProperty("channel"));


// Obj destructioning

const user_des = {
    name : "Unknown",
    age : 21,
    email : "subhan@gmail.com",
    channel : "Subhan Ahmed",
    password : "123456789",
    country : "Pakistan"
}

// console.log(user_des.age);
// console.log(user_des.email);
// console.log(user_des.channel);
// console.log(user_des.password);
// console.log(user_des.country);

// How to access a other form in obj destructioning
// agr name ko change karan chta ha to ap is ko name : jo likhna ho name
const {name : Tanveer, email : mail} = user_des;
// or ya karan ka baad jo value ap na ☝ is ma likhi hia wahi print karani hogi.
// console.log(Tanveer, mail);


// obj destucting
// const navbar = ({comapny}) => {
// console.log("This Example of React");

// }

// navbar(comapny = "Kanshan");


// JSON (Data Conversion)

// JSON DATA Example
const data = {
    "name" : "Subhan Ahmed",
    "age" : 21,
    "email" : "subhan@gmail.com",
    "channel" : "Subhan Ahmed",
    "password" : "123456789",
    "country" : "Pakistan",
    "isLoggedin" : true, 
    "ispremiumMember" : true, 
    "courseList" : {
        "Course_first" : "HTMl",
        "Course_second" : "CSS",
        "Course_third" : "JS",
        "Course_forth" : "React",
        "Course_fifth" : "Node",
        
    }, 
    "friends" : {
        "Friend_first" : "Ali",
        "Friend_second" : "Ahmed",
        "Friend_third" : "Hassan",
    },
    "address" : {
        "city" : "Karachi",
        "pincode" : 123456,
        "postal code" : 123456,
    }

}

// How to access a JSON DATA
const json_string = JSON.stringify(data);
const json_data_print = JSON.parse(json_string);
console.log(json_data_print.courseList.Course_forth);