// all方法：
/**
 * all方法可以完成并行任务， 它接收一个数组，数组的每一项都是一个promise对象。
 * 当数组中所有的promise的状态都达到resolved的时候，all方法的状态就会变成resolved，
 * 如果有一个状态变成了rejected，那么all方法的状态就会变成rejected。
 */

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log(res); //结果为[1, 2, 3]
});

/**
 * 调用all方法时的结果成功的时候是回调函数的参数也是一个数组，
 * 这个数组按顺序保存着每一个promise对象resolve执行时的值
 */