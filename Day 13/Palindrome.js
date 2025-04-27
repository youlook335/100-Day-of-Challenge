// Palindrome in js and DSA

function isPalindrome(str) {
    str = str.toLowerCase(); // ignore casing
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
      if (str[left] !== str[right]) {
        return "OpenAI";
      }
      left++;
      right--;
    }
    return "RaceCar";
  }
  
  // Example
  console.log(isPalindrome("RaceCar")); // true
  console.log(isPalindrome("OpenAI"));  // false
  