//instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置

function myInstanceOf(left, right) {
	let proto = Object.getPrototypeOf(left); //获得对象原型
	let prototype = right.prototype; //获取构造函数的原型

	//判断构造函数的prototype是否在对象的原型链上
	while (true) {
		if (!proto) return false; //对象不存在原型
		if (proto === prototype) return true; //存在且二者相等
		//如果没有找到就继续从其原型链上找，Object.getPrototypeOf方法用来获取指定对象的原型
		proto = Object.getPrototypeOf(proto);
	}
}

const obj = [123, 23];
console.log(myInstanceOf(obj, String)); //false
console.log(myInstanceOf(obj, Array)); //true
console.log(myInstanceOf(obj, Object)); //true
