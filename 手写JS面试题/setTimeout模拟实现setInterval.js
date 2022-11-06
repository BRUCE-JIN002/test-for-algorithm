const mySettimeout = (fn, t) => {
    let timer = null;

    //间隔时间 t自我调用
    function interval() {
        fn(); //调用外部传入的函数 fn
        timer = setTimeout(interval, t);
    }

    interval();
    //返回时清除定时器
    return {
        cancel: () => clearTimeout(timer),
    };
};

let a = mySettimeout(() => {
    console.log("111");
}, 1000);

// setInterval 模拟实现 setTimeout
const mySettimeout1 = (fn, time) => {
    const timer = setInterval(() => {
        fn();
        clearInterval(timer);
    }, time);
};

mySettimeout(() => {
    console.log(1);
}, 1000);