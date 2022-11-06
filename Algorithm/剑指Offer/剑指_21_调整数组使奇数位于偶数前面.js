var exchange = function(nums) {
    let i = 0,
        j = nums.length - 1;
    while (i < j) {
        //得到偶数
        while (i < j && nums[i] & 1) i++;
        //得到奇数
        while (i < j && !(nums[j] & 1)) j--;
        //交换
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    return nums;
};

console.log(exchange([1, 3, 5]));