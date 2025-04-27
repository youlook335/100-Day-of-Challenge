// forEach صرف loop لگاتا ہے اور کچھ return نہیں کرتا۔

// ya sirf Array par loop lagta hai

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.forEach((element) => {
//   console.log(element);
// });


// forEach is used to iterate over an array and perform an action on each element. It takes a callback function as an argument, which is executed for each element in the array. The callback function can take up to three arguments: the current element, the index of the current element, and the array itself.

// Here's an example of using forEach to print each element of an array:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number  * 2);
});


// Other Exampel in js

const fruits = ['apple', 'banana', 'mango'];

// agr yha jitna parameter pass kara ga itni print hoga jasa fruit index array
fruits.forEach((fruit, index, array) => {
  console.log(`Fruit: ${fruit}, Index: ${index}, Full Array: ${array}`);
});


// array par loop lagana
const users = [
    { name: 'Ali', age: 25 },
    { name: 'Sara', age: 30 },
    { name: 'Zain', age: 22 }
  ];
  
  users.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
  });
  