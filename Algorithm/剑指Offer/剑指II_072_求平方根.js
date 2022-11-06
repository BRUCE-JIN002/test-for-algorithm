//数学法
var mySqrt = function(x) {
    if (x === 0) return 0;
    let ans = Math.exp(0.5 * Math.log(x));
    let res = (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
    return Math.floor(res);
};

//二分法
var mySqrt = function(x) {
    let l = 0,
        r = x;
    while (l !== r) {
        let mid = Math.floor((l + r + 1) / 2);
        if (mid * mid <= x) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return l;
};