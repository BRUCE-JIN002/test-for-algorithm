//重载的概念：
//在程序中可以定义相同的名字， 不同参数的形式的不同函数， 在调用的时候，自定识别不同参数对应的函数，
//实现了相同的函数名， 不同的调用
//javascript本身没有重载的， 但是可以通过arguments实现函数重载

function React() {
    //arguements: [x, y, z...] 类数组
    //传入的是一个参数，就返回正方形
    if (arguments.length >= 1) {
        this.width = arguments[0];
        this.height = arguments[0];
    }
    //传入的是两个参数，就返回长方形
    if (arguments.length > 1) {
        this.width = arguments[0];
        this.height = arguments[1];
    }
    //覆盖原型上的toString()方法
    this.toString = function() {
        return "width: " + this.width + " " + "height: " + this.height;
    };
}
var r1 = new React(10);
console.log(r1.toString());

var r2 = new React(10, 9);
console.log(r2.toString());

//多态：同一个函数再不同的情况下的表现不同的状态， 重写和重载