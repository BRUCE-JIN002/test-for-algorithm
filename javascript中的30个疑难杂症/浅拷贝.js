/**
 * 深浅拷贝的方式:
 * 1. 遍历赋值
 * 2. Object.create()
 * 3. JSON.parse()和 JSON.stringify()
 *
 * 深、浅拷贝的区别:
 * 就是假设 B复制了 A, 当修改A时，看B是否发生变化，如果B跟者变了，就是浅拷贝；
 * 否则就是深拷贝。
 */

//1. 遍历
var obj = {
	//定义一个对象obj
	a: "Hello",
	b: {
		a: "world",
		b: 112,
	},
	c: [11, "Jack", "Tom"],
};

//遍历拷贝
function simpleClone(newObj) {
	var obj = {};
	for (let i in newObj) {
		obj[i] = newObj[i];
	}
	return obj;
}

var objCopy = simpleClone(obj);
console.log(obj);
console.log(objCopy);
//改变objCopy的属性值
objCopy.b.a = "hello world";
console.log(obj);
console.log(objCopy);

//2. Object.create()方法：

var objCopy1 = Object.create(obj);
console.log(objCopy1); //输出 {}, 将属性拷贝到__proto__上了
