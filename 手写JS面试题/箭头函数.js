const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length)); //[ 8, 6, 7, 9 ]

setTimeout(() => {
    console.log("I happen sooner");
    setTimeout(() => {
        console.log(" I happen later");
    }, 100);
}, 100);

//常规写法
var greeting = () => {
    let now = new Date();
    return "Good " + (now.getHours() > 17 ? "evening." : "day.");
};

console.log(greeting());
// console.log(now); // ReferenceError: now is not defined 标准的let作用域

// 参数括号内定义的变量是局部变量（默认参数）
var greeting1 = (now1 = new Date()) =>
    "Good " + (now1.getHours() > 17 ? "evening." : "day.");
greeting1(); //Good day.
// console.log(now1); //ReferenceError: now is not defined

// 对比：函数体内{}不使用var定义的变量是全局变量
var greeting2 = () => {
    now2 = new Date();
    return "Good " + (now2.getHours() > 17 ? "evening." : "day.");
};

greeting2();
console.log(now2); //Fri Dec 22 2017 10:01:00 GMT+0800 (中国标准时间)

// 对比：函数体内{} 用var定义的变量是局部变量
var greeting3 = () => {
    var now3 = new Date();
    return "Good " + (now3.getHours() > 17 ? "eveing." : "day.");
};

greeting3(); //Good day.
// console.log(now3); //ReferenceError: now is not defined

//箭头函数也可以使用闭包
//标准的闭包函数
function A() {
    var i = 0;
    return function B() {
        return ++i;
    };
}

var inside = A();
console.log(inside()); //1
console.log(inside()); //2
console.log(inside()); //3

//箭头函数的闭包(i=0是默认参数)
var Add = (i = 0) => {
    return () => ++i;
};
var func = Add();
console.log(func()); //1
console.log(func()); //2
console.log(func()); //3

//因为仅有一个返回，return 及括号（）也可以省略
var Add =
    (i = 0) =>
    () =>
    ++i;

//箭头函数递归
var fact = (x) => (x == 0 ? 1 : x * fact(x - 1));
console.log(fact(5)); //120