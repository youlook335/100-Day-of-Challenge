// toUpperCase()
// toLowerCase()
// length
// substring(start, end)
// split()
// concat()
// replace(oldStr, newStr)


// Strings - Manipulation in js And DSA

// is sa ap ka text Upperacse ma aya ga

let str = "salam";
// console.log(str.toUpperCase());

// is sa ap ka 

let str_1 = "SALAM 2";
// console.log(str_1.toLowerCase());

// kisi bhi string ki length kasia maloom karta hai 

// console.log(str_1.length, str.length);

// ya is liya hota ha ka ap kitna ko print karna chat ha jaisa ka ma na likha 0 sa 5 tak js ma 0 ak indx ki jga hta hai or is ko hi 1 bola jata hai ma na bola ka 0 sa la kar 5 tk print kara do 

let str_2 = "This is a Mean Part of the Destructing";
// console.log(str_2.substring(0, 3));


// ya method kisi bhi string ko aray ma convert kar data hai
let str_3 = "lorem ipsum is the mean part of the desmall ";
// console.log(str_3.split());

// ya method kisi bhi 2 ya do sa ziada ko conacting mtlb jorti hai 

let str_4 = "This is a String 1 ";
let str_5 = "This is a String 2";
let str_com = str_4.concat("", str_5)

// console.log(str_com);

// ya string ka kisi bhi part ko replace kar data hai

let str_6 = "This is a JavaScript Course & DSA";
let str_6_2 = str_6.replace("This is","He is ")
console.log(str_6_2);

// ya sab ko replce kar data hai

let str_7 = "This is a All Elemnt and String Replace All";
let str_8 = "This is a New Elemnt"
console.log(str_8);
