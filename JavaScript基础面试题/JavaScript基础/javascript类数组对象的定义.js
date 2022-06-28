/**
 * 一个拥有 length 属性和若干索引属性的对象就可以被称为类数组对象，
 * 类数组对象和数组类似，但是不能调用数组的方法。
 * 常见的类数组对象有 arguments 和 DOM 方法的返回结果，
 * 还有一个函数也可以被看作是类数组对象，因为它含有 length 属性值，代表可接收的参数个数
 */

//常见的类数组转换为数组的方法有这样几种:

//1. 通过 call 调用数组的 slice 方法来实现转换
Array.prototype.slice.call(arrayLike);

//2. 通过 call 调用数组的 splice 方法来实现转换
Array.prototype.splice.call(arrayLike, 0);

//3. 通过 apply 调用数组的 concat 方法来实现转换
Array.prototype.concat.apply([], arrayLike);

//4. 通过Array.from()方法来实现转换
Array.from(arrayLike);

//遍历类数组

//1. 将数组的方法应用到类数组上，这时候就可以使用call和apply方法
function foo() {
	Array.prototype.forEach.call(arguments, (a) => console.log(a));
}

//2. 使用Array.from方法将类数组转化成数组
function foo1() {
	const arrArgs = Array.from(arguments);
	arrArgs.forEach((a) => console.log(a));
}

//3. 使用展开操作符将类数组转换为数组

function foo() {
	const arrArgs = [...arguments];
	arrArgs.forEach((a) => console.log(a));
}
