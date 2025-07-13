// 1)
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let lft = i + 1;
        let rght = nums.length - 1;

        while (lft < rght) {
            const sum = nums[i] + nums[lft] + nums[rght];

            if (sum === 0) {
                result.push([nums[i], nums[lft], nums[rght]]);

                while (lft < rght && nums[lft] === nums[lft + 1]) {
                    lft++;
                }
                while (lft < rght && nums[rght] === nums[rght - 1]) {
                    lft--;
                }
                lft++;
                rght--;
            }
            else if (sum < 0) {
                lft++
            }
            else {
                rght--;
            }
        }
    }
    return result;
}

// 2)
