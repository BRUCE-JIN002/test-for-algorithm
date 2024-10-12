/**
 * IIFE 的含义是：定义一个匿名函数，然后立即传入参数执行它。
 * 它适用于这样的情况：要定义的这个函数只会被执行这一次，且没有必要给它取一个名字。
 */

//立即执行函数
(function (val) {
    console.log(val);
})(100);

const arr = [];
console.log("arr.length:", arr.length); //0
// console.log(arr.length()); //length()不是一个函数

//柯里化
function fun(a) {
    return (b) => {
        return (c) => console.log(a + b + c);
    };
}

let f = fun(3);
f(6)(7);
//调用方式：
fun(5)(6)(4);
