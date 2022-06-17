var countBinarySubstrings = function(s) {
    let index = 0,
        n = s.length,
        last = 0,
        ans = 0;
    while (index < n) {
        const c = s.charAt(index);
        let count = 0; //记录相等字符的数量
        while (index < n && s.charAt(index) === c) {
            index++;
            count++;
        }
        ans += Math.min(count, last); //累加动态获取最小的计数
        last = count; //更新前一次的值
    }
    return ans;
};