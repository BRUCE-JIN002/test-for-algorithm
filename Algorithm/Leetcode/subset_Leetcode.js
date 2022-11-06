var subsets = function(nums) {
    const ans = []; //结果数组
    const n = nums.length; //数组长度
    for (let mask = 0; mask < (1 << n); mask++) { //从0开始枚举到2的N次方减一
        const t = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) { //是子集时加入数组
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;
}