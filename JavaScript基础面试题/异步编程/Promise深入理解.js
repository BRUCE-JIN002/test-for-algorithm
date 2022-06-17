//创建promise
/**
 * Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
 */

//Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
const promise = new Promise(function(resolve, reject) {
    // do...somecode
    if (asyncSuccess) {
        /**异步操作成功 */
        resolve(value);
    } else {
        reject(error);
    }
});

//一般情况下都会使用new Promise()来创建promise对象，
//但是也可以使用promise.resolve和promise.reject这两个方法:
//Promise.resolve
//Promise.resolve(value)的返回值也是一个promise对象，可以对返回值进行.then调用，代码如下:
//创建promise对象可以使用new Promise的形式创建对象,
//也可以使用Promise.resolve(value)的形式创建promise对象
Promise.resolve(11).then(function(value) {
    console.log(value); //打印出 11
});

//Promise.reject
//Promise.reject 也是new Promise的快捷形式，也创建一个promise对象。代码如下：
Promise.reject(new Error("error...出错了"));

//就是下面的代码new Promise的简单形式：
new Promise(function(resolve, reject) {
    reject(new Error("我错了!"));
});

//使用resolve和reject方法：
function testPromise(ready) {
    return new Promise(function(resolve, reject) {
        if (ready) {
            resolve("Hello world");
        } else {
            reject("No thanks");
        }
    });
}

//调用方法：
testPromise(true).then(
    function(msg) {
        console.log(msg);
    },
    function(error) {
        console.log(error);
    }
);