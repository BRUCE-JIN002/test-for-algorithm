/**
 * 如何判断一个数据的类型？
 * 1. 使用 typeof，这个方法可以检测出 number、string、boolean、undefined 和 function 的类型，
 * 但是当被检测的值为数组、对象或者 null 类型时，结果均为 object，无法准确判断它们的类型
 * 2.使用 instanceof，这个运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性，
 * 有两个限制：
    .不能检测字面声明的基本变量的类型，如：instanceof Number === false
    .由于 instanceof 会遍历原型链，所以只要是在原型链上的构造函数都会返回 true:如下例
 */

function Dog() {
    this.name = "puppy";
}

Dog.prototype.bark = () => {
    console.log("woof! woof!");
};

function BigDog() {}

BigDog.prototype = new Dog();

Object.defineProperty(BigDog.prototype, "constructor", {
    value: BigDog,
    enumerable: false,
});

const bigDog = new BigDog();
for (i in bigDog) {
    console.log(i); //name brak
}

console.log(bigDog instanceof Dog); //true

/**
 * 使用constructor，但是不能判断null和undefined，并且constructor是可以被覆盖的。这个前面有展示过。

 * 如果检测是否是数组，可以用这个方法：Array.isArray
 * 使用Object.prototype.toString.call，目前这是最为可靠的检测类型的方法
 */

const a = {};
console.log(a.__proto__ === Object.prototype); //true

/**
 *打印出true，因为实例的__proto__属性指向其构造函数的prototype，而 Object对象是普通对象的构造函数。
 
 * 前面说了只有构造函数有 prototype属性，很明显 Object是一个构造函数，
 * 所以 Object.prototype指向所有 new Object()构造的实例的原型；
 * 
 * 而实例的__proto__这个私有属性，指向其构造函数的 prototype；
 * 当我们声明 const a = {}时，其实是隐式调用了 const a = new Object()
 * 
 * 综上，a.__proto__ 指向a的构造函数的 prototype属性，也就是 Object的 prototype属性。
 */