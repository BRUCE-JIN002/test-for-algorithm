function flatter(arr) {
    if (!arr.length) return;
    return arr.reduce(
        (pre, cur) =>
        Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur], []
    );
}
const arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]];
console.log(flatter(arr));

//迭代实现
//some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。
//它返回的是一个Boolean类型的值。
//测试函数：(item) => Array.isArray(item);

function flatter1(arr) {
    if (!arr.length) return;
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(flatter1([1, 2, [1, [2, 3, [4, 5, [6]]]]]));