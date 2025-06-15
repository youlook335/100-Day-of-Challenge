// ***************** Backtracking - Subsets *****************
// Problem: Given an integer array nums, return all possible subsets (the power set).

// "Given elements ke har possible combination (subset) ko generate karna by trying all possibilities — with recursion + backtracking."
// Note: The solution should not contain duplicate subsets, and the order of the subsets does not matter.
// Approach: Use backtracking to explore all possible subsets.
// https://chatgpt.com/c/684e8f33-7af8-8011-8ecf-c03bbf77ce88

console.log("Backtracking - Subsets");


function subset(nums: number[]): number[][] {
    const result: number[][] = [];

    function bcktrck(strat: number, path: number[]) {

        result.push([...path]); // Add the current subset to the result
        for (let i = strat; i < nums.length; i++) {
            path.push(nums[i]);
            bcktrck(i + 1, path); // Recur with the next index
            path.pop(); // Backtrack to explore the next subset
        }
    }
    bcktrck(0, []); // Start backtracking from index 0 with an empty path
    return result; // Return the list of all subsets
}
console.log(subset([1,2])); // Example usage: should return all subsets of [1, 2, 3]