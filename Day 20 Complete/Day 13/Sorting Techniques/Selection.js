// This is a Selection Sort in javascript

// for first swapping to a array
let sec_arr = [20, 21, 32, 43, 65, 12, 43, 10];
let n = sec_arr.length;
for (let i = 0; i<n-1; i++) {
    let mid = i;
    for (let j = i+1; j<n; j++) {
      if (sec_arr[mid]> sec_arr[j])mid = j;
    }
    if (mid != 1)
    {
        let te = sec_arr[mid]
        sec_arr[mid]  = sec_arr[i];
        sec_arr[i] = te
    }  
}
console.log(sec_arr);




// for Second swapping to a array
// for (let i = 0; i < sec_arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < sec_arr.length; j++) {
//         if (sec_arr[j] < sec_arr[min]) {
//           min = j;
//         }
        
//     }
//     let swa = sec_arr[i];
//     sec_arr[i] = sec_arr[min];
//     sec_arr[min] = swa;
// }
// console.log(sec_arr);