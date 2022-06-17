/**
 * @param {number} n
 * @return {number}
 */
// var sumNums = function(n) {
//  return Math.floor((n + 1) * n / 2);
// };

var sumNums = (n) => {
    let res = 0;
    const sum = (num) => {
        num > 1 && sum(num - 1); //边界条件判断
        res += num;
        return res;
    };

    sum(n);
    return res;
};