function Rehan() {
    return Plush();
}
function Plush() {
    return Vadant();
}
function Vadant() {
    return Kahan();
}
function Kahan() {
    return Jamshed();
}
function Jamshed() {
    return Smad();
}
function Smad() {
    return Dani();
}
function Dani() {
    return Gulz();
}
function Gulz() {
    // ya fasle sara function false ya true sara true
    return true;
}
// console.log(Rehan());

// Example of 
// recursive فنکشن خود کو بار بار کال کر رہا ہے (یہ recursion ہے)
// Base Case ہے: if (person === 5) return true; — یہ condition recursion کو روکتی ہے
// ہر کال میں person کی value 1 سے بڑھ رہی ہے، اور جب person 5 ہو جائے گا تو recursion رک جائے گا
// یہ infinite recursion نہیں، بلکہ controlled recursion ہے

// function recursive(person) {
//     if (person === 5) return  ;
//     console.log(person);
//     return recursive(person + 1)
// }
// console.log("Outcome:",recursive(1));


// function multiplay(){
//     let arr = [1, 2,3 ,4 ,5 ,6 ,7 ]
//     let prod = 1;
//     for (let i = 0; i < arr.length; i++) {
//         prod *= arr[i];
//     }
//     return prod;
// }
// console.log(multiplay());

function div(arr) {
    console.log(arr);
    if (arr.length <= 0) {
        return 1;
    } else return arr[arr.length - 1] * div(arr.slice(0, arr.length - 1))
}
console.log(div([1,26,7,9,7]));