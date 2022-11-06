const obj = [1, 2, 3];

//1. 通过Object.prototype.toString.call()判断
console.log(Object.prototype.toString.call(obj));
console.log(Object.prototype.toString.call(obj).slice(8, -1) === "Array");

//2. 通过原型链判断
console.log(obj.__proto__ === Array.prototype);

//3.通过ES6的Array.isArray()判断
console.log(Array.isArray(obj));

//4. 通过instanceof 判断
console.log(obj instanceof Array);

//5. 通过Array.prototype.isPrototypeOf() 判断
console.log(Array.prototype.isPrototypeOf(obj));

//6. 通过构造函数判断
console.log(obj.constructor.name);
