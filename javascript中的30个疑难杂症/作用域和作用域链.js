/**
 * 作用域scope: 一个变量的可用范围；
 * 作用域链scope Chain: 以当前作用的scope属性为起点依次引用每个AO(activation object),
 * 直到window结束，形成多级引用的关系。
 * 两大作用域: 全局作用域， 函数作用域
 * 解释执行： 在执行过程中， javascript 引擎是严格按照作用域机制，来执行的，
 * 并且javascript域 it 的变量和函数作用域是在定义时， 就决定的， 而不是执行时决定的，
 * javascript中的作用域在函数体内有效， 无块级作用域
 */

//作用域

function a() {
	function b() {
		var bb = 234;
	}
	var aa = 123;
	b();
}

var glob = 100; //全局作用域
a();

console.log(b); //报错

//面试题
var buttons = [{ name: "b1" }, { name: "b2" }, { name: "b2" }];

function bind() {
	for (var i = 0; i < buttons.length; i++) {
		//换成let 就是0, 1, 2
		buttons[i].fun = function () {
			alert(i);
		};
	}
}

bind();
buttons[0].fun(); //3
buttons[1].fun(); //3
buttons[2].fun(); //3
