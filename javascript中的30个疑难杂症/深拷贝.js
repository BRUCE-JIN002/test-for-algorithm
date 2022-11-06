/**
 * 深浅拷贝的方式:
 * 1. 遍历赋值
 * 2. Object.create()
 * 3. JSON.parse()和 JSON.stringify()
 *
 * 深、浅拷贝的区别:
 * 就是假设 B复制了 A, 当修改A时，看B是否发生变化，如果B跟者变了，就是浅拷贝；
 * 否则就是深拷贝。
 */

// 1. 遍历实现深拷贝

var obj = {
    a: "Hello",
    b: {
        a: "world",
        b: 112,
    },
    c: [11, "Jack", "Tom"],
};

function deepClone(startObj, endObj) {
    var obj = endObj || {};
    for (let i in startObj) {
        if (typeof startObj[i] === "object") {
            obj[i] = startObj[i].constructor === Array ? [] : {};
            //obj[i] = startObj[i].constructor === Array ? [] : Object.create(null);
            deepClone(startObj[i], obj[i]);
        } else {
            obj[i] = startObj[i];
        }
    }
    return obj;
}

var objCopy = deepClone(obj);
console.log(obj);
console.log(objCopy);
objCopy.b.a = "Jack";
objCopy.c[0] = 22;
console.log(obj);
console.log(objCopy);

//2. JSON.parse()、JSON.stringify()
//过程； object->string->object
var objCopy1 = JSON.parse(JSON.stringify(obj));
console.log(obj);
console.log(objCopy1);
objCopy1.c[0] = 22;
console.log(obj);
console.log(objCopy1);