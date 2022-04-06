/**
 * 为什么函数的 arguments 参数是类数组而不是数组？如何遍历类数组?
 *
 * 答案：
 * 因为 arguments是一个对象，它的属性是从 0 开始依次递增的数字，还有callee和length等属性，与数组非常相似,
 * 但是它们却没有数组常见的方法属性，如forEach, reduce等，所以我们叫它们类数组。
 */

//遍历数组的三种方法:

// 1. 数组的方法应用到类数组上，这时候就可以使用call和apply方法，如：

function foo() {
    Array.prototype.forEach.call(arguments, (a) => console.log(a));
}

//2. 使用Array.from方法将类数组转化成数组；

function foo1() {
    const arrArgs = Array.from(arguments);
    arrArgs.forEach((a) => console.log(a));
}

//3. 使用扩展操作符将类数组转换为数组

function foo3() {
    const arrArgs = [...arguments];
    arrArgs.forEach((a) => console.log(a));
}