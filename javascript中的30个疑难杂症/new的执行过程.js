/**
 * new的执行过程分为哪几步：
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
}

var p = new Person("Jack", 23); //实例化
console.log(p.name);

//实例化的过程：
/**
 * 1. 创建一个新对象：
 *    var obj = new Object()
 *
 * 2. 把 obj 的 proto指向构造函数的 prototype 对象，以实现继承
 *    obj.__proto__ = Fn.prototype
 *
 * 3. 将步骤 1 创建的对象 obj 作为 this 的上下文
 *    var result = Fn.call(obj)
 *
 * 4. 返回创建的对象 obj (如果该对象没有返回对象，则返回 this)
 *
 *    if (typeof result === 'object') {
 *        return result;  //func = result
 *    } else {
 *        return obj;     //func = obj
 *    }
 */
