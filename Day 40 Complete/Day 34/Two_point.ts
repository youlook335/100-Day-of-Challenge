// https://www.youtube.com/watch?v=IEgp1aRqQ7w
// https://chatgpt.com/c/684cfb1c-f4fc-8011-9165-d5a310551c0e
// https://chatgpt.com/c/684dbdb8-8f10-8011-ab7d-74d93a2371cb // abhi kam kiya hai


console.log("Two Point Algorithm");


// Target sum تلاش کرنا 

function targetSum(arr: number[], target: number): [number, number] | null {
    let lft = 0;
    let rgt = arr.length - 1;

    while (lft < rgt) {
        const sum = arr[lft] + arr[rgt];
        if (sum === target) {
            return [arr[lft], arr[rgt]];
        } else if (sum < target) {
            lft++;
        } else {
            rgt--;
        }

    }
    return null;
}
const stroed: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(targetSum(stroed, 20)); 


// Array کو reverse کرنا 
function revarr_string(arr: string[]): string[] {
    let lft = 0;
    let rgt = arr.length - 1;

    while (lft < rgt) {
        // Swap elements at lft and rgt
        const temp = arr[lft];
        arr[lft] = arr[rgt];
        arr[rgt] = temp;

        // Move pointers towards the center
        lft++;
        rgt--;
    }
    return arr;
}
function revarr_num(arr: number[]): number[] {
    let lft = 0;
    let rgt = arr.length - 1;

    while (lft < rgt) {
        // Swap elements at lft and rgt
        const temp = arr[lft];
        arr[lft] = arr[rgt];
        arr[rgt] = temp;

        // Move pointers towards the center
        lft++;
        rgt--;
    }
    return arr;
}
// console.log(revarr_num([100])); // This case no error and change simple return 100
// console.log(revarr_string(["Tanveer", "Ali", "Ahmed", "Khan"]));
// console.log(revarr_num([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

// Duplicates remove کرنا
function duplremov(arr: number[]): number[] {
    if (arr.length === 0) return arr; // If the array is empty, return it as is

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return arr.slice(0, i + 1);
}
// console.log(duplremov([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]o


// Palindrome check

function Palindrome(arr: (number | string)[]): boolean {
    let lft = 0;
    let rght = arr.length - 1;

    while (lft < rght) {
        if (arr[lft] !== arr[rght]) {
            return false;
        }
        lft++;
        rght--;
    }
    return true;
}
// console.log("Number :", Palindrome([1, 2, 3, 2, 1]));
// console.log("String in One Letter :", Palindrome(["madam"]));
// console.log("String :", Palindrome(["Tanveer", "Ali", "Tanveer"]));


// Container With Most Water

function check_water(height: number[]): number {
    let lft = 0;
    let rgt = height.length - 1;
    let maxArea = 0;

    while (lft < rgt) {
        const hght = Math.min(height[lft], height[rgt])
        const wdth = rgt - lft;
        const area = hght * wdth;
        maxArea = Math.max(maxArea, area);

        if(height[lft] < height[rgt]) {
            lft++;
        } else {
            rgt--;
        }
    }
    return maxArea;
}
// console.log(check_water([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])); 


// Trapping Rain Water
function trap(height: number[]): number {
    let lft = 0;
    let rgt = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (lft < rgt) {
        if (height[lft] < height[rgt]) {
            if (height[lft] >= leftMax) {
                leftMax = height[lft];
            } else {
                waterTrapped += leftMax - height[lft];
            }
            lft++;
        } else {
            if (height[rgt] >= rightMax) {
                rightMax = height[rgt];
            } else {
                waterTrapped += rightMax - height[rgt];
            }
            rgt--;
        }
    }
    return waterTrapped;
}
console.log(trap([9, 8, 7, 6, 5, 4, 3, 2 , 1, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));


