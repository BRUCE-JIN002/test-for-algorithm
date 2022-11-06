//什么是js中的包装类型？
/**
 * 在 JavaScript 中，基本类型是没有属性和方法的，但是为了便于操作基本类型的值，
 * 在调用基本类型的属性或方法时 JavaScript 会在后台隐式地将基本类型的值转换为对象.
 */

/**
 * 在访问'abc'.length时，JavaScript 将'abc'在后台转换成String('abc')，然后再访问其length属性。
 */
const a = "abc";
console.log(a.length); //3
console.log(a.toUpperCase()); //ABC

//JavaScript也可以使用Object函数显式地将基本类型转换为包装类型

var b = "abc";
var c = Object(b); //显示包装 b为对象

console.log(typeof c); //object

//也可以使用valueOf方法将包装类型倒转成基本类型
var e = "efg";
var f = Object(e);
var g = f.valueOf();
console.log(g); //"efg"

//看看如下代码会打印出什么
var a1 = new Boolean(false);
if (!a1) {
	console.log("Oops");
}

//什么也不会打出来, 因为虽然包裹的基本类型是false，
//但是false被包裹成包装类型后就成了对象，所以其非值为false，所以循环体中的内容不会运行
console.log(!a1); //false
