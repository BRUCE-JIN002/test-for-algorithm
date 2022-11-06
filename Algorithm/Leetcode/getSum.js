const jsonObj = {
    a: 1,
    b: {
        c: 2,
        d: 'abc',
        e: [1, 2]
    },
    e: {
        f: {
            g: 3
        }
    }
}

// let sum = 0;
function getSum(obj) {
    return getInsideSum(obj, 0);
}

function getInsideSum(obj, sum) {
    for (let key in obj) {
        // 数组的判断方法： 
        // 1.Object.prototype.toString.call(obj)
        // 2. Array.isArray([])
        if (Array.isArray(obj[key])) { //属性为数组
            sum += getArraySum(obj[key]);
        } else if (typeof obj[key] == 'number') {
            sum += obj[key];
        } else if (typeof obj[key] === "object") { //属性为对象递归求值
            sum = getInsideSum(obj[key], sum);
        }
    }
    return sum;
}

function getArraySum(arr) {
    let sum = 0;
    if (!Array.isArray(arr)) return sum;
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(getSum(jsonObj, 0));