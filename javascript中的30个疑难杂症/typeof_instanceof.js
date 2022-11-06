console.log(typeof null); //object
console.log(typeof function () {}); //function
console.log(typeof Array); //Array
console.log(typeof "string"); //string

console.log([] instanceof Array);
console.log([] instanceof Object);

//检测数据类型
console.log(Object.prototype.toString.call("1"));
console.log(Object.prototype.toString.call([]));

/**
 * 总结：
 * 1.  typeof 返回的是一个字符串， 该字符串说明运算数的类型，
 * 结果为number, boolean string, function(函数)，object(对象, NULL, 数组), undefined
 * 2.  instanceof 是用来判断A 是否是B的实例化对象， 检测的是原型
 */
