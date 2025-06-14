function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1; // total unique count
}

let arr = [1, 1, 2, 2, 3, 3, 4];
const uniqueCount = removeDuplicates(arr);
console.log("Unique count:", uniqueCount);
console.log("Modified array:", arr.slice(0, uniqueCount));