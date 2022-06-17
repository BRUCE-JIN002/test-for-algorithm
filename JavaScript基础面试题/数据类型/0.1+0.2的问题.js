let n1 = 0.1;
let n2 = 0.2;
console.log(n1 + n2); // 0.30000000000000004

//toFixed(num) 方法可把 Number 四舍五入为指定小数位数的数字
let res = (n1 + n2).toFixed(2);
console.log(res);

//如何实现0.1+0.2=0.3呢？
/**
 * 对于这个问题，一个直接的解决方法就是设置一个误差范围，通常称为“机器精度”。
 * 对JavaScript来说，这个值通常为 2-52，在 ES6中，提供了 Number.EPSILON属性，而它的值就是 2^-52，
 * 只要判断 0.1+ 0.2 - 0.3是否小于Number.EPSILON，如果小于，就可以判断为0.1+0.2 ===0.3
 */

function numberEpsilon(arg1, arg2) {
    return Math.abs(arg1 - arg2) < Number.EPSILON;
}

console.log(numberEpsilon(0.1 + 0.2, 0.3));