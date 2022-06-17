// finally()
//finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

promise
    .then((result) => {})
    .catch((error) => {})
    .finally(() => {});
//上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，
//都会执行finally方法指定的回调函数。

//下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
Server.listen(port)
    .then(function() {
        //....
    })
    .finally(server.stop);

/**
 * finally方法的回调函数不接受任何参数，这意味着没有办法知道，
 * 前面的 Promise 状态到底是fulfilled还是rejected。
 * 这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
 * finally本质上是then方法的特例：
 */

promise.finally(() => {
    //语句
});

//等同于：
promise.then(
    (result) => {
        return result;
    },
    (error) => {
        //语句
        throw error;
    }
);

//上面代码中，如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。
//有了finally方法，则只需要写一次。