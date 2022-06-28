//1. instanceof

//instanceof只能正确判断引用数据类型， 而不能判断基本数据类型
//instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
console.log([] instanceof Object);
console.log([] instanceof Array);

console.log("---------------");

//2. 利用构建函constructor数判断数据类型
console.log((2).constructor === Number);
console.log({}.constructor === Object);
console.log("str".constructor === String);
console.log(true.constructor === Boolean);
console.log("--------------");

function Fn() {}
Fn.prototype = new Array();

var f1 = new Fn();

console.log(f1.constructor === Fn); //false
console.log(f1.constructor === Array); //true

console.log("+++++++++++++");

//3. Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型
var a = Object.prototype.toString;

console.log(a.call(2)); //object Number
console.log(a.call(true)); //object Boolean
console.log(a.call("str")); //object String
console.log(a.call([])); //object Array
console.log(a.call(function () {})); //object Function
console.log(a.call({})); //object Object
console.log(a.call(undefined)); //object Undefined
console.log(a.call(null)); //object Null

const car = () => {
	console.log("jin");
};

console.log(car.toString());

const arr = [1, 2, 3, 5];
//在想要得到对象的具体类型时，应该调用Object原型上的toString方法
console.log(Object.prototype.toString.call(arr));

//4. typeof

console.log(typeof 2); //number
console.log(typeof true); //boolean
console.log(typeof "str"); //string
console.log(typeof []); //object
console.log(typeof function () {}); //function
console.log(typeof {}); //object
console.log(typeof undefined); //undefined
console.log(typeof null); //object

//其中数组、对象、null都会被判断为object，其他判断都正确。
