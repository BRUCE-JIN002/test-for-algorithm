var validPalindrome = function(s) {
    let i = 0,
        j = s.length - 1;
    //l, r 记录匹配不上时的位置，count记录匹配不上的次数
    var l,
        r,
        count = 0;
    while (i < j) {
        if (s[i] === s[j]) {
            //成功匹配
            i++;
            j--;
        } else {
            //第一次匹配出错跳过左边界
            if (count === 0) {
                l = i;
                r = j;
                i++;
                count++;
            } else if (count === 1) {
                //第二次匹配出错跳过右边界
                i = l;
                j = r;
                count++;
                j--;
            } else if (count === 2) {
                //第三次匹配出错直接返回false
                return false;
            }
        }
    }
    return true;
};

let str = "abccabccba";

console.log(validPalindrome(str));