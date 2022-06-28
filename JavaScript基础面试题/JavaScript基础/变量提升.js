a = 1;
var a;
console.log(a);

const b = 2;
console.log(b);

//变量提升的问题 1:

let temp = new Date();

function fn() {
	console.log(temp);
	var temp = "Hello World!";
}

/**
 * 在这个函数中，原本是要打印出外层的tmp变量，但是因为变量提升的问题，
 * 内层定义的tmp被提到函数内部的最顶部，相当于覆盖了外层的tmp，所以打印结果为undefined
 */

fn(); //undefined

//var hoist问题2：

var tmp = "Hello World";

for (var i = 0; i < tmp.length; i++) {
	console.log(tmp[i]);
}

console.log(i); //11
