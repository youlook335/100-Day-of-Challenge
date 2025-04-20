// Reduce function in js 

const mynums = [1, 2, 3];

const redirect = mynums.reduce(function (acc, calc) {
    console.log(`Accumulator: ${acc}, Current Value: ${calc}`)
    return acc + calc;
    // yha jo bhi value dalo to wo accumulator ma ja kar save ho jati hai
}, 200);
console.log(redirect);

// Check For Arrow Function

const mynums2 = [1, 2, 3, 4];

const Total = mynums2.reduce((acc, cal) => (acc + cal), 0);

console.log(Total);


// Implemnt on a Shooping cart

const Shooping_cart = [
    {
        course: "Js Course",
        price: 1999,
        Location: "Lahore Pakistan"
    },
    {
        course: "Python Course",
        price: 3400,
        Location: "Peshawar Pakistan"
    },
    {
        course: "Data Science Course",
        price: 5999,
        Location: "Malir Karachi Pakistan"
    },
    {
        course: "Graphic Design Course",
        price: 2999,
        Location: "Memon Industrial Institute Pakistan"
    },
];

const Add_Price = Shooping_cart.reduce((acc , cal) => {
    return acc + cal.price
},0);
console.log(Add_Price);
