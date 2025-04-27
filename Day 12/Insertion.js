// Insertion کے لیے push() اور unshift() methods آسان اور directly استعمال کیے جا سکتے ہیں۔

// push(): Last میں insertion

// unshift(): First میں insertion

// اگر ہمیں specific position پر insert کرنا ہو، تو splice() method استعمال کر سکتے ہیں، لیکن یہ تھوڑا complex ہو سکتا ہے کیونکہ اس میں باقی elements کو shift کرنا پڑتا ہے۔

// concat() (Alternative Method):

// concat() method سے بھی new elements کو existing array میں insert کیا جا سکتا ہے۔

// insertion ka mtlb ha ka kisi bhi array ma sa koi chhez add karna 


// Insertion in js

let arr = [10, 20, 30, 40];

// Insertion at index 2
let index = 2;
let element = 25;

// Step 1: Shift elements to the right
for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]; // Shift elements one position to the right
}

// Step 2: Insert the new element at the specified index
arr[index] = element;

// console.log(arr);
 // Output: [10, 20, 25, 30, 40]

let same_array = [21, 24, 28, 53, 32, 64, 43];
same_array.push(21)
// console.log(same_array);


let same_array_1 = [543, 64, 231, 42, 980, 75, 12, 65, 32];

same_array_1.unshift(200);

// console.log(same_array_1);

let same_array_2 = [13, 432,41, 231,102, 124, 31];

// is ko har dfa new variable ma store kana hota hia 
let new_same_array_2 = same_array_2.concat(212)

console.log(new_same_array_2);
