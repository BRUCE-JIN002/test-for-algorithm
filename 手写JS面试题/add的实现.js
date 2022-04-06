/**
 *实现一个 add 方法 使计算结果能够满足如下预期： add(1)(2)(3)()=6, add(1,2,3)(4)()=10
 *其实就是考函数柯里化。
 */

function add(...args) {
    const allArgs = [...args];

    function fn(...newArgs) {
        allArgs = [...args, ...newArgs];
        return fn;
    }
    //toString() 方法返回一个表示该对象的字符串
    fn.toString = function() {
        if (!allArgs) {
            return;
        }
        return allArgs.reduce((sum, cur) => sum + cur);
    };
    return fn;
}

console.log(add(1)(2)(3)());
console.log(add(1, 2, 3)(4)());