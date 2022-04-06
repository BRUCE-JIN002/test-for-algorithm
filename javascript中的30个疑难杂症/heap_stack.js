//什么是栈： 计算机为原始数据类型开辟的一块内存空间， string number.....
//什么是堆： 计算机为引用类型开辟的一块内存空间， object

var a = "Mooc";
var b = a;
b = "Mooc2";
console.log(a, b); //Mooc Mooc2

var c = { key: 1 };
var d = c;
d.key = 2;
console.log(c, d); //{ key: 2 } { key: 2 }

/**
 * 总结：
 * 栈内存的是原始值，堆内存储的是地址值
 */