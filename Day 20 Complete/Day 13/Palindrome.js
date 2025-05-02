// Palindrome in js and DSA

// Check for split
// ya ak new variable lata hai or is ma word ko tukra kar data hai or is ko array ma convert kar data hai

let split_check = "mam";

let split_check_again = split_check.split('');
// console.log(split_check_again);

// Check for reverse
// 
let reverse_check = [123, 342, 532, 645, 865, 532, 568, 312];
let reverse_check_string = ["This is a reverse Checking", "This is again Check"];
// console.log(reverse_check.reverse());
// console.log(reverse_check_string.reverse(""));


let join_check = ['A ', 'B ', 'C ', 'D ', 'E'];
// agr app join ka aga ("") asa karta ha to sahi print hoga warna commas aya ga, or ap is ma ak or cheez kar sakta hai date ka sath 
// Try to this 
let date = [21, 4, 2025];
// console.log(date.join("-"));
// ab ma semiciln nahi lgta to dekho kiya ata hai
// console.log(join_check.join());
// console.log(join_check.join(""));


// function Palindrome_1(str) {
//     let reversed_method = str.split("").reverse().join("");
//     return str === reversed_method;
// }
// console.log(Palindrome_1("madam"));



let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log("Yes, it's a palindrome!");
} else {
  console.log("No, it's not a palindrome.");
}
// console.log(reversed);



function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
// agr is ma name asa ho ja ka ulta or sidha phrna par sahi parha jaya is ko ya true ya wo content dikhya ga
console.log(isPalindrome("ji"));
