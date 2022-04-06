function makeAddder(a) {
    return function(b) {
        return a + b;
    }
}

var add5 = makeAddder(5);
var add20 = makeAddder(20);

/**
 * 它会用一个参数来创建一个新的“adder”函数，
 * 再用另一个参数来调用被创建的函数时，
 * makeAdder 会将一前一后两个参数相加
 *
 * */
console.log(add5(6)); //11
console.log(add20(7)); //27

/**
 * 一个闭包，就是 一个函数 与其 被创建时所带有的作用域对象 的组合。
 *  闭包允许你保存状态 ----所以，它们可以用来代替对象
 */