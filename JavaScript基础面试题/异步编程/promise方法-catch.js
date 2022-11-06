// catch方法：
/**
 * Promise对象除了有then方法，还有一个catch方法，该方法相当于then方法的第二个参数，
 * 指向reject的回调函数。不过catch方法还有一个作用，
 * 就是在执行resolve回调函数时，如果出现错误，抛出异常，不会停止运行，而是进入catch方法中
 */

p.then(
    (data) => {
        console.log("resolved", data);
    },
    (error) => {
        console.log("rejected", error);
    }
);

p.then((data) => {
    console.log("resolved", data);
}).catch((error) => {
    console.log("rejected", error);
});