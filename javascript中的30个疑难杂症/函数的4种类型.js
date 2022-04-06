/**
 * 1. 匿名函数：定义的时候没有任何变量引用的函数
 * 匿名函数自调： 如果函数只执行一次
 */

//匿名函数自调： 如果函数只执行一次
(function(a, b) {
    console.log("a =", +a);
    console.log("b =", +b);
})(1, 2);

//总结： 匿名函数的优点是： 节约内存空间， 调用前和调用后内存中不创建任何的函数对向。

//2. 回调函数(callback): 将一个函数作为对象交给其他函数执行的函数
var arr = [13, 3, 65, 50, 23];
arr.sort((a, b) => a - b);

//异步回调：
function getPrice(inputParams, callback) {
    Promise.ajax({
        url: ctx + "/xxxxx",
        type: "post",
        data: { field: inputParams },
        async: true,
        successs: function(data) {
            result = data;
            callback(result);
        },
    });
}

//3. 递归函数： 循环调用函数本身
var f = function(x) {
    if (x === 2) {
        return x;
    } else {
        return x * f(x - 1);
    }
};

//arguments.callee: 注意严格模式下不支持使用 use strict
function f1(x) {
    if (x === 1) {
        return 1;
    } else {
        return x * arguments.callee(x - 1);
    }
}

//4. 构造函数
//调用方式不一样， 作用也不一样(构造函数用来新建实例对象)
//Person() 这个构造函数， Person 既是函数名， 也是这个对象的类名
function Person() {}