console.log("This is a Hashset Programming");

const fruits = [
    "apple",  "orange", "apple", "banana", "kiwi", "apple"
]

const fruitcheck = new Set(fruits);

fruitcheck.add("mango");
fruitcheck.add("kiwi");
fruitcheck.add("banana");
fruitcheck.add("apple");
fruitcheck.delete("mango");
console.log(fruitcheck);
