console.log("Insertion Sort in JavaScript");

let ine_arr = [12, 32, 43, 53, 6, 54, 1, 2, 30];
let n = ine_arr.length

for (let i = 1; i < n; i++) {
    let key = ine_arr[i];
    let j = i - 1;
    while (j >= 0 && ine_arr[j] > key) {
        ine_arr[j+1] = ine_arr[j];
        j--;
    }
    ine_arr[j+1] = key
}
console.log(ine_arr);
