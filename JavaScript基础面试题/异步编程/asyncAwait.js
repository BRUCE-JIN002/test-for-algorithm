/**
 * async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，
 * 等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
 *
 * await的含义为等待，也就是 async 函数需要等待await后的函数执行完成并且有了返回结果（Promise对象）之后，才能继续执行下面的代码。
 * await通过返回一个Promise对象来实现同步的效果
 */

async function async1() {
    console.log("async start"); //2
    await async2();
    console.log("async1 end"); //5
}

async function async2() {
    console.log("async2"); //3
}

console.log("script start"); //1
async1();
console.log("script end"); //4

/**
 * 执行结果：
 * script start
 * async start
 * async2
 * script end
 * async1 end
 */