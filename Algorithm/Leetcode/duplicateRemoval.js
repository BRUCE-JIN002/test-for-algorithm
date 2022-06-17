const ary = ['a', 'b', 'a', 'b', 'c', 'a', 'b', 'c', 'c', 'c']

const dist = (arr) => {
    return Array.from(new Set(arr))
}


//时间复杂度O(1)
const uniarr = (arr) => {
    let res = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        let newItem = arr[i];
        if (!res[newItem]) { //res对象上不存在此属性，则添加此属性
            result.push(newItem);
            res[newItem] = newItem;
        }
    }
    console.log(res);
    return result;
}

console.log(dist(ary));
console.log(uniarr(ary));