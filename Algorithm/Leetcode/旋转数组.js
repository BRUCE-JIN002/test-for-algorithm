var rotate = function(nums, k) {
    let stk = new Array();
    let len = nums.length;
    if (len < 2) return nums;
    if (k > len) k %= len;
    for (let i = len - k; i < len; i++) {
        stk.push(nums[i]);
    }
    for (let i = 0; i < len - k; i++) {
        stk.push(nums[i]);
    }
    for (let i = 0; i < len; i++) {
        nums[i] = stk[i];
    }
    return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];

console.log(rotate(nums, 3));