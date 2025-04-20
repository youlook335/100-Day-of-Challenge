
// function greet(name , callback) {
//     console.log("Assalam o Alaikum " + name) ;
//     callback();  
// }
// function sayby() {
//     console.log("Allah Hafiz");
// }
// greet("Haider" , sayby)



// function greet(name, callback) {
//     console.log("Assalam o Alaikum " + name);
//     callback();
//   }
  
//   function sayBye() {
//     console.log("Allah Hafiz!");
//   }
  
//   greet("Ali", sayBye);
  

// let isDone = true;

// let promise = new Promise((resolve, reject) => {
//   if (isDone) {
//     resolve("Kaam hogaya!");
//   } else {
//     reject("Kaam nahi hua.");
//   }
// });

// promise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const callback  = (arg) => {
//   console.log(arg);
  
// }


// Only Run a Browser

// const loadscript = (src, callback) => {
//     let sc = document.createElement ("script");
//     sc.src = src ;
//     sc.onload = callback("Harry");
//     document.head.append(sc);
// }
// loadscript("https://cdn.js.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)



// callback Practise

// function grook(name , age , contact, callback) {
//     console.log( name + age + contact);
//     callback();
// }

// function grook1(id) {
// console.log("No.1");
// }
// grook(" Tanveer ", "16 ", "+92 3257048768",grook1);

// function grook(name, age, contact, callback) {
//     console.log(name + age + contact);
//     callback();
//   }
  
//   function grook1(id) {
//     console.log(id);
//   }
  
//   grook("Tanveer", "16", "+92 3257048768", grook1);
  
function grook(name, age, contact, callback) {
    console.log(name + age + contact);
    let result = callback("This is callback value");
    console.log(result);  // callback ka return yahan print hoga
  }
  
  function grook1(id) {
    return "Callback returned: " + id;
  }
  
  grook("Tanveer", "16", "+92 3257048768", grook1);
  