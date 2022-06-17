//object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别

//1. 扩展操作符:

let outObj = {
    inObj: { a: 1, b: 2 },
};

let newObj = {...outObj };
newObj.inObj.a = 2;
console.log(outObj); //{ inObj: { a: 2, b: 2 } }

//2. object.assign():
let outObj1 = {
    inObj: { a: 1, b: 2 },
};

let newObj1 = Object.assign({}, outObj1);
outObj1.inObj.b = 3;
console.log(newObj1); //{ inObj: { a: 1, b: 3 } }

//由以上可知： 两者都是浅拷贝