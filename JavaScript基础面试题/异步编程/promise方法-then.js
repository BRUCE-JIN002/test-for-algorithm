//Promise有五个常用的方法：then()、catch()、all()、race()、finally。下面就来看一下这些方法。

// then()
/**
 * then方法可以接受两个回调函数作为参数。
 * 第一个回调函数是Promise对象的状态变为resolved时调用，
 * 第二个回调函数是Promise对象的状态变为rejected时调用。其中第二个参数可以省略。
 * then方法返回的是一个新的Promise实例（不是原来那个Promise实例）。
 * 因此可以采用链式写法，即then方法后面再调用另一个then方法
 */

let promise = new Promise((resolve, reject) => {
    ajax("first").success(function(res) {
        resolve(res);
    });
});

promise
    .then((res) => {
        return new Promise((resolve, reject) => {
            ajax("second").success(function(res) {
                resolve(res);
            });
        });
    })
    .then((res) => {
        return new Promise((resolve, reject) => {
            ajax("third").success((res) => {
                resolve(res);
            });
        });
    })
    .then((res) => {
        console.log(res);
    });