/**
 * 闭包是指有权访问另一个函数作用域中变量的函数，
 * 创建闭包的最常见的方式就是在一个函数内创建另一个函数，
 * 创建的函数可以访问到当前函数的局部变量。
 * 闭包有两个常用的用途:
 *
 * 1. 闭包的第一个用途是使我们在函数外部能够访问到函数内部的变量。
 * 通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，
 * 可以使用这种方法来创建私有变量。
 * 2. 闭包的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，
 * 因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。
 *
 * 比如，函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包
 */

function A() {
	let a = 1;
	return () => {
		console.log(a);
	};
}
const func = A();
func();

// 闭包存在的意义就是让我们可以间接访问函数内部的变量。
// 经典面试题：循环中使用闭包解决var定义时函数的问题
for (var i = 0; i < 5; i++) {
	setTimeout(function timer() {
		console.log(i);
	}, i * 1000);
}
//首先因为 setTimeout 是个异步函数，
//所以会先把循环全部执行完毕，这时候 i 就是 6 了，所以会输出一堆 6。解决办法有三种:
//1. 使用闭包的方式

for (var i = 1; i <= 5; i++) {
	(function (j) {
		setTimeout(function timer() {
			console.log(j);
		}, j * 1000);
	})(i);
}

//2.使用let关键字
for (let i = 0; i < 5; i++) {
	setTimeout(function timer() {
		console.log(i);
	}, i * 1000);
}

// //3.使用 setTimeout 的第三个参数，这个参数会被当成 timer 函数的参数传入
for (var i = 0; i < 5; i++) {
	setTimeout(
		function timer(j) {
			console.log(j);
		},
		i * 1000,
		i
	);
}
