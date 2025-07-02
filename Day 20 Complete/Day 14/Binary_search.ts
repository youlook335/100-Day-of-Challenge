//  ************* Searching Algoritham **********

// ***************** Binary Search **********************

// Method 1
// دونوں valid ہیں, لیکن اگر آپ professional یا reusable code لکھنا چاہتے ہیں تو Method 1 بہتر ہے۔
const binar = (num, targ) => {
    let start = 0;
    let end = num.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (num[mid] === targ) {
            return mid;
        } else if (num[mid] < targ) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
console.log(binar([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14], 12));


// Method 2 

// اگر آپ beginner ہیں تو آپ کو Method 2 استعمال کرنا چاہیے۔
// ✅ کیوں؟
// Method 2 میں steps واضح ہیں:
// array الگ define کیا گیا ہے
// function کو parameters کے ساتھ call کیا گیا ہے
// logic کو سمجھنا آسان ہے کیونکہ ہر step الگ ہے



let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];
let indx = binarySearch(arr, 0, arr.length - 1, 101);
if (indx === -1) console.log("not found");
else console.log("Target found at", indx , "index");


function binarySearch(arr, first, last, target) {
    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] > target) last = mid - 1;
        else first = mid + 1
    }
    return -1;
}