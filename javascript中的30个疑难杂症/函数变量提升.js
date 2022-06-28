// js提前声明或者声明提前
// html css dom 树
// js解释引擎： 词法分析 -> 语法分析 -> 语法树
// 词法分析是将字符流转换为记号流
// js 解释： 预编译期与执行期
// 预编译， 预解析， 当javascript引擎解析脚本时， 他会在预编译期对所有的声明的变量和函数进行处理，
// 并且是先预声明变量， 再预定义函数。

// 变量声明提前， 值留在本地， 函数是整个代码提前, 如果是var fn声明的，只是变量fn提升， 函数体会留在本地

var a;
console.log(a); //undefined
a = 10;

function test() {
	//hoist 声明提前， 函数内部只提升函数内部的变量
	a = 100;
	console.log(a); //100
	var a; //坑， 这里是声明，会提前，提前到当前作用域的最前面，也就是函数的开始处称为一个函数的局部变量
	console.log(a); //100
	console.log(fn); //[Function: fn], 找不到时会在函数作用域外查找
}
test();

var fn = function () {}; //undefined, 变量fn会提升， 而函数会留在本地， 所以为undefined
console.log(a); //10  函数内部的局部变量已被释放， 而且作用域到不了外面
