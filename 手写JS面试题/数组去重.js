//利用构造函数 Set
function uniqueArr(arr) {
    return [...new Set(arr)];
}

var arr = [1, 2, 3, 3, 4, 2, 5, 6, 9, 8];
console.log(uniqueArr(arr));

//利用reduce函数
let newArr = arr.reduce((pre, cur) => {
    if (pre.indexOf(cur) === -1) {
        pre.push(cur);
    }
    return pre;
}, []);

console.log(newArr);
console.log(arr);