var findMaxAverage = function(nums, k) {
    const len = nums.length;
    let maxSum = 0;
    let ans = 0;
    //初始化;
    for (let i = 0; i < k; i++) {
        maxSum += nums[i];
    }
    ans = maxSum;

    console.log(maxSum);
    for (let i = 0, j = i + k; j < len; i++, j++) {
        maxSum += nums[j] - nums[i];
        ans = Math.max(ans, maxSum);
    }
    return ans / k;
};

console.log(findMaxAverage([5], 1));