/**
 *  原型链的终点是什么？如何打印出原型链的终点？
 *
 * 答案：
 * 由于Object是构造函数
 * 原型链终点是 Object.prototype.__proto__，而
 * Object.prototype.__proto__=== null 为true
 *
 * 所以，原型链的终点是 null
 */

//原型链上的所有原型都是对象，所有的对象最终都是由 Object构造的，
//而 Object.prototype的下一级是什么呢？自然是 Object.prototype.__proto__

console.log(Object.prototype.__proto__); //null