/**
 * 装箱： 把基本数据类型转化为对应的引用类型的操作
 *
 * 拆箱： 将引用类型转换为对应的值类型对象
 */

//装箱： 把基本数据类型转化为对应的引用类型的操作
var num = 123;
var objNum = new Number(123); //object
console.log(typeof objNum);

//拆箱： 将引用类型转换为对应的值类型对象
//valueOf()
var objNum1 = new Number(123);
console.log(typeof objNum1);
console.log(typeof objNum1.valueOf()); //123

/**
 * js primitive(input, type) input:传入的值， type： 类型值
 * input 判断是不是原始类型的值：
 * 1. 是， 直接返回
 * 2. 不是： input.valueOf(): 是原始值，直接返回
 * 3. 还不是：input.toString(): string是 原始类型，返回
 * 否则报错
 *
 * valueOf(): input 原始类型的值： 有，返回， 没有， 返回对象本身
 * toString(): input 字符串转换， 对象：[object type] type: 对象类型
 */

//面试题
console.log([] + []); //""输出空字符串
console.log([].valueOf()); //[]
console.log([].toString()); //""
console.log([] + []); //"" + "" = "" 空字符串

console.log([] + {}); //[object Object]
console.log([]); //"" ，空字符串
console.log({}.toString()); //[object Object]
