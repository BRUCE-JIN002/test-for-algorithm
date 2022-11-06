//Map结构原生提供三个遍历器和一个遍历方法：

/**
 * keys()：返回键名的遍历器。
 * values()：返回键值的遍历器。
 * entries()：返回所有成员的遍历器。
 * forEach()：遍历 Map的所有成员。
 */

const map = new Map([
    ["foo", 1],
    ["bar", 2],
    ["seq", 3],
]);

for (let key of map.keys()) {
    console.log(key); //foo bar seq
}

for (let val of map.values()) {
    console.log(val); //1 2 3
}

for (let items of map.entries()) {
    console.log(items); // ["foo", 1], ["bar", 2], ["seq", 3],
}

map.forEach((key, value) => {
    console.log(key, value); //1 foo, 2 bar, 3 seq
});

map.forEach((key) => {
    console.log("key: ", key); //1 2 3 只得到键
});

//weakmap: WeakMap 对象也是一组键值对的集合，其中的键是弱引用的。
//其键必须是对象，原始数据类型不能作为key值，而值可以是任意的