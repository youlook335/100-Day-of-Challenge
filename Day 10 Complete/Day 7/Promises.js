// console.log('This is a Promises Topic in js');

// const pro = new Promise((resolve, reject) => {
//     let a = 20;
//     let b = 10;
//     if (a === b) {
//         resolve('Equal');
//     } else {
//         reject('Not Equal');
//     } 
// });

// pro.then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(message);
// });



const Mypro = new Promise((anado, jana) => {
    let a = 10;
    let b = 10;
    if (a == b) {
      anado('Equal');
    } else {
      jana('Not Equal');
    }
  });
  
  Mypro.then((anyway) => {
    console.log(anyway);
  }).catch((howtoexecute) => {
    console.log(howtoexecute);
  });
  