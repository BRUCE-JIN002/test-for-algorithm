var missingNumber = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i] ^ (i + 1);
    }
    return res;
};

console.log(missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9]));
//执行结果： 8