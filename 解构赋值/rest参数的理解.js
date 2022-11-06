//扩展运算符被用在函数形参上时，它还可以把一个分离的参数序列整合成一个数组
function mutil(...args) {
    let result = 1;
    for (var val of args) {
        result *= val;
    }
    return result;
}

const res = mutil(1, 2, 3, 4);
console.log(res);

function mutiple(...args) {
    console.log(args);
}

mutiple(1, 2, 3, 4); //[ 1, 2, 3, 4 ]

//includes
const son = "haha";
const father = "xixi haha hehe";
const f = father.includes(son);
console.log(f);

//startWith
const son1 = "haha";
const father1 = "haha hehe";
const flag = father1.startsWith(son1);
console.log(flag);

//endWith
const son2 = "hehe";
const father2 = "haha hehe";
const flag2 = father2.endsWith(son2);
console.log(flag2);

//可以使用 repeat 方法来使同一个字符串输出多次（被连续复制多次
const soureceCode = "repeat for 3 times";
const repeated = soureceCode.repeat(3);
console.log(repeated);
console.log(typeof
    function() {});