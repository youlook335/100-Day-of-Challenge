// https://chatgpt.com/c/684e8f33-7af8-8011-8ecf-c03bbf77ce88

// Explantion: This code generates all permutations of a given array using backtracking.
// Note: The code is designed to be run in a Typescript environment.

console.log("Backtracking Permutations");

function bcktrack(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = Array(nums.length).fill(false);

  function backtrack(path: number[]) {
    if(path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for( let i = 0; i <nums.length; i++){
      if(used[i]) continue; // Skip used numbers
      path.push(nums[i]); // Choose the number
      used[i] = true; // Mark as used

      backtrack(path); // Recur with the current path

      path.pop(); // Backtrack: remove the last number
      used[i] = false; // Unmark the number
    }
  }
  backtrack([]); // Start the backtracking with an empty path
  return result;;
}
console.log(bcktrack([1, 2, 3])); // Example usage
