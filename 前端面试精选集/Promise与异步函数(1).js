/**
 *一个页面的脚本如下，请问会打印出什么内容？
 */

console.log("script start");

setTimeout(function() {
    console.log("setTimeout");
}, 0);

new Promise(function(resolve) {
    console.log("promise1");
    resolve();
    console.log("promise2");
}).then(function() {
    console.log("promise then");
});

console.log("script end");
/**
 * 结果：
 * script start
 * promise1
 * promise2
 * script end
 * promise then
 * setTimeout
 *
 * 因为 JavaScript 中有 2 种任务：
 * 宏任务（macro-task）:
 *    同步 script (整体代码)，setTimeout 回调函数, setInterval 回调函数, I/O, UI rendering；
 * 微任务（micro-task）:
 *    process.nextTick, Promise 回调函数，Object.observe，MutationObserver
 *
 * 其执行的顺序是这样的：
 * 首先 JavaScript 引擎会执行一个宏任务，注意这个宏任务一般是指主干代码本身，也就是目前的同步代码
 * 执行过程中如果遇到微任务，就把它添加到微任务任务队列中
 * 宏任务执行完成后，立即执行当前微任务队列中的微任务，直到微任务队列被清空
 * 微任务执行完成后，开始执行下一个宏任务
 * 如此循环往复，直到宏任务和微任务被清空
 */

/**
 * 题目二：
 */

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 3000);
}

console.log(100);

/**
 * 输出结果： 100 5 5 5 5 5
 * 原因: 这段代码执行的顺序是：
 * 首先执行宏任务，也就是主干代码中的 5 次循环以及最后一句同步打印出100。
 * 由于微任务队列是空的，所以继续执行下一个宏任务，也就是setTimeout的 5 个回调函数。
 * 回调函数中的i变量由var关键字声明，所以 5 个回调函数共享 1 个i变量。
 * 而此时 5 次循环已经完成，i变量的值为 5，所以打印出 5 个 5。
 *
 * 题外话：
 * setTimeout 第二个参数是延时时间，单位是 ms。
 * 这个延时时间并不能精确地描述事件触发的延时时间，只是一个最小值。
 * 如果队列中没有其它消息，在这段延迟时间过去之后，消息会被马上处理。
 * 但是，如果有其它消息，setTimeout消息必须等待其它消息处理完。
 */

/**
 * 题目三： 如何修复第 2 题中的代码，使得其可以打印出 0,1,2,3,4？
 */

//方法一： 立即执行函数
for (var i = 0; i < 5; i++) {
    (function outerFunction(num) {
        setTimeout(() => {
            console.log(num);
        }, 1000);
    })(i);
}

//方法二：let
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

/**
 * 问题三: 一个页面的脚本如下，请问会打印出什么内容？为什么？
 *
 */

document.body.style = "background: blue";
Promise.resolve().then(() => {
    document.body.style = "background: black";
});

/**
 * 页面会直接变黑而不会进入变蓝的阶段
 * 因为根据 Event Loop 模型，浏览器在执行第一个宏任务—主干代码时，遇到了微任务—Promise 回调函数。
 * 所以宏任务结束时，浏览器不会立即执行下一个宏任务—UI rendering，而是立即执行微任务队列，
 * 也就是 Promise 的回调函数。
 * 当微任务队列被清空后，才会去执行 UI rendering。
 * 也就是说，在页面渲染之前，document.body.style早已经在 Promise 的回调函数中被赋值为black 了。
 */