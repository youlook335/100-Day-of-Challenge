//  ************* Searching Algoritham **********

// ***************** Binary Search **********************

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
