/**
 * 闭包(Closure)：作用域
 * 1. 是引用了自由变量的函数这个被引用的自由变量和这个函数一同存在，
 * 及时已经离开了创造它的环境也不例外。 所以， 有另外一种说法，
 * 认为闭包是由函数和其相关引用环境组合而成的， 实现信息驻留(信息的保持，引用在，空间不销毁)。
 */

// 简单的闭包;
var Person = function () {
	var count = 0; //私有变量
	return function getCount() {
		console.log(count++);
	};
};

var p = Person();
p(); //0
p(); //1
p(); //2

//应用
var buttons = [{ name: "b1" }, { name: "b2" }, { name: "b2" }];

function bind() {
	for (var i = 0; i < buttons.length; i++) {
		//解决方法1：var换成let 就是0, 1, 2
		buttons[i].fun = function () {
			alert(i);
		};
	}
}

bind();
buttons[0].fun(); //3
buttons[1].fun(); //3
buttons[2].fun(); //3

//解决方法2：立即执行函数
(function (num) {
	buttons[i].onclick = function () {
		alert(num);
	};
})(i);
//这个是把i当做全局变量传入给num, 保存了当前这个局部变量形成闭包
var buttons = [{ name: "b1" }, { name: "b2" }, { name: "b2" }];

function bind() {
	for (var i = 0; i < buttons.length; i++) {
		//立即执行函数
		(function (num) {
			buttons[i].onclick = function () {
				alert(num);
			};
		})(i);
	}
}

bind();
buttons[0].onclick(); //0
buttons[1].onclick(); //1
buttons[2].onclick(); //2

//闭包的缺点： 闭包会导致内存驻留，如果是大量对象的闭包环境， 需要注意内存消耗
