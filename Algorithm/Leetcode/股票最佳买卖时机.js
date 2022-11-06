var maxProfits = function(nums) {
    let max = 0,
        min = Infinity,
        ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans = Math.max(max, max - min);
        min = Math.min(nums[i], min); //最小值
    }
    return ans;
}