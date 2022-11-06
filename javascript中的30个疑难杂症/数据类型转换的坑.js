/**
 * 1. 特殊类型的隐式转换 NaN, 0, undefined, null, "" 默认转换为 => false， 其他情况为true
 * 2.逻辑运算符 &&和 || 在隐式转换下的情况
 * 3. == 和 === 的区别
 */

// 3. == 和 === 的区别
console.log(undefined == null); //true 先隐式转换为 number类型， 再进行比较
console.log(undefined === null); //false 不做隐式转， 直接比较值和类型

//js舍入误差
console.log(0.1 + 0.2); //0.30000000000000004

//解决方案1：
//舍去保留两位小数
console.log(parseFloat((0.1 + 0.2).toFixed(2))); //0.3

//方案 2：
function add(num1, num2) {
	m = Math.pow(10, 2);
	return (num1 * m + num2 * m) / m;
}

console.log(add(0.1, 0.2)); //0.3
