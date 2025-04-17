// Rest Operator in js

// Agr ya jo nicha wala kam hai agr ay destructing sa hota to hama ... ki jaga hama a b c likhan hota jitni bhi values hoti hama vakue likhni hoti is liya Rest Operator operaot na kaam asan kar dia ..

// agr ma yahi method asa use karo to jitni value hogi sab Print hogi si ko bolta hai Spreda Operator
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// let [...chang_2] = arr;
// console.log(chang_2);


// agr mujah apna pas sa dikhan ha ja ya value print ho or ya arry ma jaya to asa karo

let [a, b, c,d,e, f, ...rest
    // ap rest ki jaga kuch bhi likh sakta ho jo yha likh ha ho is ko console ma bhi likhan hoga
] = arr;
console.log(a, b, c,d,e,  rest);