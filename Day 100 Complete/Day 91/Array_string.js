// This is a Array and String in DSA Revsision

// String
console.log("This is a Intro of Stirng");

const a = ["Apple ", "Banana ", "Cat ", "Dog ", "Elephent ", "Flag ", "Graphs ", "Hen ", "Iron "];
// console.table(a);

let b = 10;
let c = 20;
// console.log(b + c);

let d = 10
let e = true
console.log(`This is a `, 10 + false);

console.log(d + e)


// Lower to uppercase
let topr = "ahad";
console.log(topr.toUpperCase());

// Uppercase to Lowercase
let lowe = "AHAD"
console.log(lowe.toLocaleLowerCase());

// Character at position
let chr = "Character at position";
console.log(chr.charAt(0));
console.log(chr.charAt(1));
console.log(chr.charAt(2));
console.log(chr.charAt(3));
console.log(chr.charAt(4));
console.log(chr.charAt(5));
console.log(chr.charAt(6));

//  Another Option
console.log(chr[0]);
console.log(chr[18]);

// Substring from index Slice
let sub = "Using in Typescript";
// letter 0 to 4 ex: "U" Letter 0 and "N" letter is 4
console.log(sub.slice(0, 4));

// Chck of all number index mean that number
console.log(sub.length);

console.log(sub.slice(4, 9));

// Includes (Check if string contains)

let inc = ["Apple", "Banana", "Carrys"];
let inc_deep = "Damag"
console.log(inc.includes("Apple"));
console.log(inc.includes("op"));
// this condition chck of one string like banana chck no answer is true no is chck a is not false
console.log(inc_deep.includes("damag"));
console.log(inc_deep.includes('Damag'));
// chck this sepecific word like Damag not a dammaage and chck of upper and lower


// Replace
let repl = "Hello Type";
// anytime you declare a 2 words
let chge = repl.replace("Type", "Js");
console.log(chge);
// not chnge a value in real like this
console.log(repl);

// Split (Turn string into array)

let Name = "My Name is Hassan";
// String convert into a array
let Name_chnge = Name.split("");
console.log(Name_chnge);
// Not chnge a in real value like this
console.log(Name);

// Trim (Remove spaces)
let trm = "       This is Space of Out Remove      ";
console.log(trm.trim());
// not chnge a real value
console.log(trm);

// Concatenation (Add strings)
let conca = "This";
let conca_1 = "Is";
let conca_2 = "Meme";
let conca_combne = conca + "" + conca_1 + "" + conca_2;
console.log(conca_combne);

// Repeat

let rep = "ji kon ";
// Repeat a string you are selcted a at time 2 , 3 any number
console.log(rep.repeat(5));

//  StartsWith / EndsWith

let sta_end = "Once Start and Ending a time";
// this answer is true ya false like start is no strat is Once but this is false
console.log(sta_end.startsWith("Start"));
// and this is false time is end
console.log(sta_end.endsWith("a"));

// This is True Above

console.log(sta_end.startsWith("Once"));
console.log(sta_end.endsWith("time"));


// ************************** Array ****************************


let mix = ['Number', 12, true, "Khan"];
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ["Ali", "Usman ", "Hamza", "Kuldeep"];
let bol = [true, false];

console.log(arr.length);
console.log(names.length);
console.log(bol.length);

// Accessing Elements

let arr_2 = ["Hussan", "Khurshed", "Salman", "Jawad"];
console.log(arr_2[1]);
console.log(arr_2[2]);

// Modifying Elements

let names_1 = ['new', 'Old', 'weak', 'damage', 'loos'];
names_1[2] = 'strong'
names_1[4] = 'win'
console.log(names_1);

// ➕➖ Add & Remove Elements
//  Add

let arr_3 = [1, 2, 3, 4];
arr_3.push(5);                  // Add last
arr_3.unshift(0);               // Add First

console.log(arr_3);

// Remove

let arr_4 = [0, 1, 2, 3, 4, 5, 6];
arr_4.pop();        // Remove from end
arr_4.shift();        // Remove from frist

console.log(arr_4);

// Includes
// chck for why is numer and string and any data type declre in variable
let inc_1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(inc_1.includes(2));

// Indexof
// chk for why string number of
let names_2 = ["Alice", "Bob", "Charlie"];
// console.log(names_2.indexOf("Bob")); // 1

// Join
// Two Array Connected /Convert array to string
let jin = ["Back", "End"];
// console.log(jin.join(" & "));

// slice() – Get subarray (non-destructive)
let nums_2 = [10, 20, 30, 40, 50];
// Position 1 to 2 in any elmnt to print
let nums_2_sliced = nums_2.slice(0, 2);
// console.log(nums_2_sliced);

// splice() – Remove/change array (destructive)
let nums_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// print 1, 2 and all remove
// console.log(nums_3.splice(1, 2));


// reverse() – Reverse array in-place
let reve = [100, 200, 300, 400, 500];
// console.log(reve.reverse());

// sorting Sort array numerically
let sort_num = [5, 1, 3, 4, 7, 2, 8, 9, 6, 10];
sort_num.sort((a, b) => a - b);
console.log(sort_num);
