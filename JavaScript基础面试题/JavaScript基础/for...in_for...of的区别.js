/**
 * for…of 是ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）,
 * 并且返回各项的值，和ES3中的for…in的区别如下
 */

//1. for...of 遍历获取的是对象的键值，for...in 获取的是对象的键名
//2. for...in 会遍历对象的整个原型链， 性能非常差，不推荐使用，而 for...of只会遍历当前对象
//3. 对于的数组的遍历，for...in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，
//for…of 只返回数组的下标对应的属性值

//使用for...of遍历对象
/**
 * for…of是作为ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）,
 * 并且返回各项的值，普通的对象用for..of遍历是会报错的
 */

//如果需要遍历的对象是类数组对象，用Array.from转成数组即可:

var obj = {
	name: "Jack",
	age: 23,
	email: "123@163.com",
};

newObj = Array.from(obj);
console.log(newObj);

for (var k of newObj) {
	console.log(k);
}

//如果不是类数组对象，就给对象添加一个[Symbol.iterator]属性，并指向一个迭代器即可
// var obj1 = {
// 	0: "0",
// 	1: "1",
// 	2: "2",
// };

// obj1[Symbol.iterator] = function () {
// 	var keys = Object.keys(this);
// 	var count = 0;
// 	return {
// 		next() {
// 			if (count < keys.length) {
// 				return { value: obj1[keys[count++]], done: false };
// 			} else {
// 				return { value: undefined, done: true };
// 			}
// 		},
// 	};
// };

// for (var k of obj1) {
// 	console.log(k);
// }
