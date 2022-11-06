/**
 * 手写 new操作符的实现
 */

/**
 * call() 允许为不同的对象分配和调用属于一个对象的函数/方法。
 * call() 提供新的 this 值给当前调用的函数/方法。
 * 你可以使用 call 来实现继承：
 * 写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）
 */
//call() 方法使用一个指定的 this值 和 单独给出的一个或多个参数来调用一个函数
function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype);
    let res = fn.call(obj, ...args);
    if (res && (typeof res === "object" || typeof res === "function")) {
        return res;
    }
    return obj;
}

//用法:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function() {
    console.log("I am " + this.name + ", " + this.age + " years old.");
};

let p1 = myNew(Person, "Jack", 23);
console.log(p1.name);
console.log(p1.age);
p1.say();