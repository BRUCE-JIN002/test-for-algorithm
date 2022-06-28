function Person(name) {
	this.name = name;
}

//修改原型
Person.prototype.getName = function () {};
var p = new Person("Hello");
p.constructor = Person; //指回来

console.log(p.__proto__ === Person.prototype); //true
console.log(p.__proto__ === Person.constructor.prototype); //false

//重写原型
Person.prototype = {
	getName: function () {},
};

var p1 = new Person("Hello");
p1.constructor = Person;

console.log(p1.__proto__ === Person.prototype); //true
console.log(p1.__proto__ === Person.constructor.prototype); //false

//如何获得原型链上的属性
function iterate(obj) {
	var res = [];
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			res.push(key + ":" + obj[key]);
		}
	}
	return res;
}

const obj = {
	name: "Jack",
	age: 23,
};

const data = iterate(obj);
console.log(data);
