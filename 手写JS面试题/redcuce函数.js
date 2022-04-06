/**
 * reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，
 * 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
 * 第一次执行回调函数时，不存在“上一次的计算结果”。
 * 如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
 * 否则，数组索引为 0 的元素将被作为初始值 initialValue，
 * 迭代器将从第二个元素开始执行（索引为 1 而不是 0）。
 */

//reducer 逐个遍历数组元素，
//每一步都将当前元素的值与上一步的计算结果相加（上一步的计算结果是当前元素之前所有元素的总和),
//直到没有更多的元素被相加。
const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previous, current) => previous + current,
    initialValue
);

console.log(sumWithInitial);

const array = [15, 16, 17, 18, 19];

function reducer(previous, current, index, array) {
    const returns = previous + current;
    //callback 被调用四次，打印每次调用的参数和返回值
    console.log(
        `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
    );
    return returns;
}

array.reduce(reducer);

let res = [15, 16, 17, 18, 19].reduce(
    (previousValue, currentValue, CurrrentIndex, array) =>
    previousValue + currentValue,
    0
);

console.log(res);

//求数组所有值的和
let sum = [0, 1, 2, 3].reduce((pre, cur) => pre + cur);
console.log(sum);

//累加对象数组里的值
let initValue = 0;
let total = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (pre, cur) => pre + cur.x,
    initValue
);
console.log(total);

//将二维数组转化为一维
let flattened = [
    [0, 1],
    [2, 3],
    [4, 5],
].reduce((pre, cur) => pre.concat(cur), []);
console.log(flattened);

//计算数组中每个元素出现的次数
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let countNames = names.reduce(function(allNames, name) {
    if (name in allNames) {
        allNames[name] += 1;
    } else {
        allNames[name] = 1;
    }
    return allNames;
});

/**
 * countedNames is:
{ 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
 */

//按属性对 object 分类
let people = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 21 },
    { name: "Jane", age: 23 },
];

function groupBy(objectArray, property) {
    //accepted: 接受的数组对象， obj: 属性
    return objectArray.reduce((accepted, obj) => {
        let key = obj[property]; //获得需要属性分类的对象属性
        if (!accepted[key]) {
            accepted[key] = [];
        }
        acc[key].push(obj);
        return accepted;
    }, {});
}

let groupedByPeople = groupBy(people, "age");

//使用扩展运算符和 initialValue 绑定包含在对象数组中的数组
let friends = [{
        name: "Anna",
        books: ["Bible", "Harry Potter"],
        age: 21,
    },
    {
        name: "Bob",
        books: ["War and peace", "Romeo and Juliet"],
        age: 26,
    },
    {
        name: "Alice",
        books: ["The Lord of the Rings", "The Shining"],
        age: 18,
    },
];

let allbooks = friends.reduce(
    function(pre, cur) {
        return [...pre, ...cur.books];
    }, ["Alpha"]
);

console.log(allbooks);

//数组去重
let myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
let newArray = myArray.reduce((pre, cur) => {
    if (pre.indexOf(cur) === -1) {
        pre.push(cur);
    }
    return pre;
}, []);

console.log(newArray); //[ 'a', 'b', 'c', 'e', 'd' ]

//使用 .reduce() 替换 .filter().map()

const number = [-5, 6, 2, 0];
const doubledNumber = number.reduce((pre, cur) => {
    if (cur > 0) {
        const doubled = cur * 2;
        pre.push(doubled);
    }
    return pre;
}, []);

console.log(doubledNumber); //[12, 4];

//按顺序运行 Promise
function runPromiseInSequence(arr, input) {
    return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
    );
}

function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    });
}

function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
    return a * 3;
}

function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log);