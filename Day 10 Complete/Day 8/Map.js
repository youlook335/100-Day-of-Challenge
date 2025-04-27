// add a 10 + in any values

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const adding = num.map( (number) => 
    number + 10
);
// console.log(adding);


// How to use a Multiple time map, filter

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const some_addes = num1
.map( (num) => num * 10)
.map( (num) => num - 11)
.map( (num) => num + 20)
.filter( (num) => num > 9)
console.log(some_addes);