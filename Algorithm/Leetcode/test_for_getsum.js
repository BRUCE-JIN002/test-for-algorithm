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

getSum = (obj) => {
    let sum = 0;

    function getInsideSum(obj) {
        for (const key in obj) {
            // 数组的判断方法： 
            // 1.Object.prototype.toString.call(obj)
            // 2. Array.isArray([])
            if (Array.isArray(obj[key])) { //元素为数组
                sum += getArraySum(obj[key]);
            } else if (typeof obj[key] == 'object') {
                getInsideSum(obj[key]);
            } else if (typeof obj[key] == 'number') {
                sum += obj[key];
            }
        }
    }
    getInsideSum(obj);
    console.log(sum);
}

function getArraySum(arr) {
    let sum = 0;
    if (!Object.prototype.toString.call(arr)) return sum;
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        }
    }
    return sum;
}

getSum(jsonObj)