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

// function loadscript(Src, Callback) {
//     let script = document.createElement('script')
//     script.src = Src
//     script.onload = () => Callback(script)
//     document.head.append(script)
// }

// loadscript("https://example.com/somefile.js", function(script) {
//     console.log("Script loaded successfully!", script);
// });




const loadscript = name(src, callback) {
    let sc = document.createElement ("script");
    sc.src = src ;
    sc.onload = () => {
        
    }
}