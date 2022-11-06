var missingNumber = function(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i] ^ (i + 1);
    }
    return ans;
};