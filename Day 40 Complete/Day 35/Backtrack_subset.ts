function subsets(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, path: number[]) {
        result.push([...path]);  // current subset ko save karo

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);              // choose
            backtrack(i + 1, path);          // explore
            path.pop();                      // un-choose (backtrack)
        }
    }

    backtrack(0, []);
    return result;
}

// Test
console.log(subsets([1, 2, 3]));
