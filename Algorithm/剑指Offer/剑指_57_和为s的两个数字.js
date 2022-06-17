//方法1：hashMap
var twoSum = function(nums, target) {
    let set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        const rest = target - nums[i];
        if (set.has(rest)) {
            return [nums[i], rest];
        }
    }
    return [];
};

//方法2：双指针
var twoSum = function(nums, target) {
    let i = 0,
        j = nums.length - 1;
    while (i <= j) {
        if (nums[i] + nums[j] == target) {
            return [nums[i], nums[j]];
        } else if (nums[i] + nums[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return [];
};