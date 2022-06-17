console.log((2).constructor === Number); //true
console.log(true.constructor === Boolean); //true
console.log("str".constructor === String); //true
console.log([].constructor === Array); //true
console.log(function () {}.constructor === Function); //true
console.log({}.constructor === Object); //true

var a = Object.prototype.toString;

console.log(a.call(2).slice(8, -1)); //Number
console.log(a.call(true).slice(8, -1)); //Boolean
console.log(a.call({}).slice(8, -1)); //Object
console.log(a.call([]).slice(8, -1)); //Array
console.log(a.call(function () {}).slice(8, -1)); //Function
console.log(a.call(undefined).slice(8, -1)); //undefined
console.log(a.call(null).slice(8, -1)); //Null

//判断数组
console.log(Array.prototype.isPrototypeOf([])); //true
var obj = [1, 2, 3];
console.log(obj.__proto__ === Array.prototype); //true

//0.2 + 0.1
console.log((0.1 + 0.2).toFixed(1)); //0.3

function numberEpsilon(a, b) {
	return Math.abs(a - b) < Number.EPSILON;
}
console.log(numberEpsilon(0.1 + 0.2, 0.3)); //true

//可以用 void 0 来获得安全的 undefined。
console.log(void 0); //undefined

//判断数字
console.log(isNaN("23a")); //true
console.log(Number.isNaN("123a")); //false

console.log(5 || 0); //5
console.log(5 && 0); //0
console.log(0 || 5); // 5
console.log(0 && 5); //0

console.log(typeof (1 * "23")); //number

//const 和 let
let c = 12;
c = 31;
console.log(c);

//const 对于引用类型来说只是指针不变
const d = { name: "jin", age: 20 };
console.log(d);
d.age = 23;
console.log(d);

console.log(...[1, 2, 3, ...[4, 5], 6, 7, 8]); //1 2 3 4 5 6 7 8

const stu = {
	name2: "Bob",
	age: 24,
};

const { name2, age } = stu;
console.log(name2, age);

const school = {
	classes: {
		stu: {
			name1: "Tom",
			age: 23,
		},
	},
};

console.log(school);
const {
	classes: {
		stu: { name1 },
	},
} = school;
console.log(name1);

//new操作的过程
function objectFactory() {
	let newObject = null;
	let constructor = Array.prototype.shift.call(arguments);
	let result = null;
	//判断参数否是一个函数
	if (typeof constructor !== "function") {
		console.log("type error!");
		return;
	}
	//新建一个空对象， 对象的原型为构造函数的 prototype 对象
	newObject = Object.create(constructor.prototype);
	//将this 指向新建的对象， 并执行函数
	result = constructor.apply(newObject, arguments);
	//判断返回对象
	let flag =
		result && (typeof result === "object" || typeof result === "function");
	//判断返回结果
	return flag ? result : newObject;
}

//使用方法
// objectFactory(构造函数, 初始化参数);

console.log(typeof ("23" + 1)); //string

const arr = [1, 2, 3],
	arr2 = [];
arr.forEach((a) => a + 1);
console.log(arr);
arr.map((a) => arr2.push(a * 3));
console.log(arr2);

let arr3 = arr.map((e) => e ** 2);
console.log(arr3);

const arr1 = [2, 4, 6, 8, 10].forEach((e) => console.log(e));
