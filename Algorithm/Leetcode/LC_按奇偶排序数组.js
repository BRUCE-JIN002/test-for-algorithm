var sortArrayByParity = function(nums) {
    let i = 0,
        j = nums.length - 1;
    while (i < j) {
        while (i < j && nums[j] & 1) j--;
        while (i < j && !(nums[i] & 1)) i++;
        //交换
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return nums;
};

let nums = [3, 1, 2, 4, 7, 8];
sortArrayByParity(nums);