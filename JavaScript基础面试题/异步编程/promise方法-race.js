//race
/**
 * race方法和all一样，接受的参数是一个每项都是promise的数组，
 * 但是与all不同的是，当最先执行完的事件执行完之后，就直接返回该promise对象的值。
 * 如果第一个 promise对象状态变成 resolved，那自身的状态变成了resolved；
 * 反之第一个 promise变成 rejected，那自身状态就会变成 rejected。
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

Promise.race([promise1, promise2, promise3]).then(
    (res) => {
        console.log(res); //结果： 2
    },
    (rej) => {
        onsole.log(rej);
    }
);