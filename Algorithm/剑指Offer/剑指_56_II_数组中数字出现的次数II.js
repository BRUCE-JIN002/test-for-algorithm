//解法一：
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
};

//解法二: 数学方法
var singleNumber = function(nums) {
    const set = new Set(nums);
    let setSum = 0;
    for (const val of set) {
        setSum += val;
    }
    let sum = nums.reduce((prev, cur) => prev + cur, 0);
    return (setSum * 3 - sum) / 2;
};

let nums = [1, 7, 7, 7, 9, 9, 9];

console.log(singleNumber(nums));