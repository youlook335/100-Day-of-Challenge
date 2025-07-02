console.log("Sliding Window Pattern");


const window_pattern = function () {
    const result = [];
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 21, 32, 121, 324, 2, 4, 53, 2, 31, 123, 123, 12];
    const n = nums.length;
    const k = 12;
    for (let i = 0; i <= n - k; i++) {
        let max = nums[i];
        for (let j = 0; j < k; j++) {
            if (nums[i + j] > max) {
                max = nums[j + i];
            }
        }
        result.push(max);
    }
    return result;
}
console.log(window_pattern());