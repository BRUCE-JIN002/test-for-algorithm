var findLengthOfLCIS = function(nums) {
    let stack = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        while (stack.length && nums[i] <= stack[stack.length - 1]) {
            stack = [];
        }
        stack.push(nums[i]);
        max = Math.max(max, stack.length);
    }
    return max;
};

const nums = [7, 6, 5, 4, 5, 6, 8, 9, 0, 1, 1, 1, 1, 1];
// const nums = [2, 2, 2, 2, 2];
console.log(findLengthOfLCIS(nums));