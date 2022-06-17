var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let ans = 0;
    for (let i = 0; i < len; i += 2) {
        ans += nums[i];
    }
    return ans;
};

let ans = arrayPairSum([6, 2, 6, 5, 1, 2]);
console.log(ans);