// Swaping Two Variables in 3 methods

// Method 1
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
c = a;

// console.log("a: ",a);
// console.log("b: ",b);
// console.log('c: ',c);


// Method 2

let d = 10;
let e = 20;

d = d + e;
e = d - e;
d = d - e;

// console.log("d: ",d);
// console.log("e: ",e);

// Method 3
// This is Method is a Destructing 

let f = 10;
let g = 20;

[f, g] = [g, f];

// console.log('f: ',f);
// console.log('g: ',g);

// Arithmetic Opearotrs

let plusing_1 = 10;
let plusing_2 = 20;

// console.log(plusing_1 + plusing_2);

let subtract_1 = 20;
let subtract_2 = 30;

// console.log(subtract_2 - subtract_1);

let multiply_1 = 20;
let multiply_2 = 30;

// console.log(multiply_1 * multiply_2);

let divde_1 = 20;
let divde_2 = 30;

// agr ap chta ho ka answer 1.3 1.2 . ma na ay to ap math.floor laga sakta ha
// console.log(Math.floor(divde_2 / divde_1));

let moudles_1 = 10;
let moudles_2 = 30;

// console.log(moudles_1 % moudles_2);

// agr ap chta ho ka meri last value nikal ka a jay to asa kara
// is ma jo last Value ha wo aya gi chiya 0 ya 9 hi Q na ho
// ap ka pas jitni value ha itna hi 0 0 0 brhata jaya 6 chiya ha 100 likho 76 chiya hai 1000 likho asa likhta jao
// ya value 6 sa start hogi
let remind = 19876;

// console.log(remind % 100000);

let division_concept = 231454;
// agr ap ko number 2 start sa chiya ha to ap / ya try kara agr 4 sa chiya to ap % ya use karo
// console.log(division_concept / 10000);


// Relational Operator
// in ka answer true ya false ma ata hai
// > < <= >= != = == ===
// console.log("10 > 20", 30 > 20);
// console.log("10 < 20", 10 < 20);
// console.log("10 <= 20", 10 <= 20);
// console.log("10 >= 20", 10 >= 20);
// console.log("40 != 30", 40 != 30);
// console.log("30 = 30", "30" == "30");
// console.log("30 = 30", 30 === "30");

// Logical opearaotor
// agr dono values true hogi to answer true hoga
// console.log("12 < 21 && 8 > 2 :",12 < 21 && 8 > 2);

// agr ak bhi true hoa to sab true hoga
// console.log('12 < 21 || 8 < 2 :',12 < 21 || 8 > 2);

// Unery Operaotr

// console.log("12++ :",12++);
// console.log("12-- :",12--);
// console.log("++12 :",++12);
// console.log("--12 :",--12);

// asa karna sa value phela check hogi baad ma print hogi
let increment = 10;
// console.log(increment++);
// console.log(increment);
// console.log(increment--);
// console.log(increment);

// Phela change hogi or phela print hogi
// console.log(++increment);
// console.log(--increment);


// Some Question
let anchor = 11;
let bnchor = 22;
let cnchor = anchor + bnchor + anchor++ + bnchor++ + ++anchor + ++bnchor;
// console.log("a = ", + anchor);
// console.log("b = ", + bnchor);
// console.log("c = ", + cnchor);

let boolean = true;
// js ma true ka mtlb 1 hota hai or false ka mtlb 0 hota hai
boolean++;
// console.log(boolean);

let boolean1 = false;
boolean1++;
// console.log(boolean1);

// let var_check = 10++;
// ap asa nahi kar sakta is ma agr ap ko ++ lagna ha to ap log vali value ma likha
// console.log(var_check);

let var_check1 = 10;
// ap asa kar sakta ha is ma agr ap ko ++ lagna ha to ap log vali value ma likha
console.log(++var_check1);