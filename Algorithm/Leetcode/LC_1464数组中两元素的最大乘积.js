var maxProduct = function(nums) {
    nums.sort((a, b) => a - b);
    let max = nums[nums.length - 1] - 1;
    let min = nums[nums.length - 2] - 1;
    return max * min;
};