// **********************  Searching Algoritham *********************
// Linear Search in js

// Method 1
let nums = [1, 2, 3, 4, 5, 6, 7, 0, 43, 21, 25, 65];
let target = 65;
const linear = () => {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        }
    }
    return -1;
}
console.log(linear());

// Method 2

const linear_2 = (num , tar) => {
    for(let i = 0; i <num.length; i++){
        if (tar === num[i]){
            return i ;
        }
    }
    return -1;
}
console.log(linear_2([2, 3, 4, 5,6 ,7 ,89, 43,11 ], 7));