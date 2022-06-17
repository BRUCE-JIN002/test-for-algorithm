/**
 * Promise本身是同步的立即执行函数，
 * 当在executor中执行resolve或者reject的时候, 此时是异步操作，
 * 会先执行then/catch等，当主栈完成后，
 * 才会去调用resolve/reject中存放的方法执行，
 * 打印p的时候，是打印的返回结果，一个Promise实例。
 */

console.log("script start"); //1
let promise1 = new Promise(function(resolve) {
    console.log("promise1"); //2
    resolve();
    console.log("promise1 end"); //3
}).then(function() {
    console.log("promise2"); //5
});

setTimeout(function() {
    console.log("setTimeout"); //6
});

console.log("script end"); //4

/**
 * 执行结果：
 * script start
 * promise1
 * promise1 end
 * script end
 * promise2
 * setTimeout
 */