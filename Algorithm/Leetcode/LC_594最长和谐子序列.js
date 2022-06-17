var findLHS = function(nums) {
    const cnt = new Map();
    let res = 0;
    //初始化 哈希表 cnt
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    //统计
    for (const key of cnt.keys()) {
        if (cnt.has(key + 1)) {
            res = Math.max(res, cnt.get(key) + cnt.get(key + 1));
        }
    }
    return res;
};