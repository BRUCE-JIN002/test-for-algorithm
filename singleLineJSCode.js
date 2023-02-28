//判断对向是否为空

//低效做法
const isEmptyObj = (obj) => JSON.stringify(obj) === "{}";

const obj = {};

console.log(isEmptyObj(obj)); //true
//高效做法

const isEmptyObj1 = (obj) => !Object.keys(obj).length;

console.log(isEmptyObj1(obj)); //true

//反转字符串

let str = "ni hao a xiao peng you";

const reverseString = (str) => str.split(" ").reverse().join(" ");

console.log(reverseString(str));

//首字母大写

let word = "letter";

const caplitilize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(caplitilize(word));

//检查数字是奇数还是偶数

const num = 3435;

const isOdd = (num) => num % 2 === 0;

console.log(isOdd(num));

//将数字转换为千分位模式

const num1 = 1000000;
const toDecimal = (num) => num.toLocaleString();

console.log(toDecimal(num1));

//获取随机的布尔值
const getRandomBoolean = () => Math.random() >= 0.5;

console.log(getRandomBoolean()); //true | false

//数组去重

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9];

const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr(arr));

//计算数字数组的和
let sumArr = [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9];

const arrSum = (sumArr) => sumArr.reduce((a, b) => a + b, 0);

console.log(arrSum(sumArr)); //66

//计算数组的平均值
const meanArr = (arr) => arr.reduce((a, b) => a + b) / arr.length;

console.log(meanArr(sumArr)); //4.714285714285714

//数组随机排列
const sortRadom = (arr) => arr.sort(() => Math.random() - 0.5);

console.log(sortRadom(sumArr));

//获取数组的交集

const intersection = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));

console.log(intersection([1, 2, 3, 4], [1, 2, 35, 6])); //[1, 2]

//多维数组转换为一位数组
const deepFlattenArr = (arr) =>
  [].concat(...arr.map((v) => (Array.isArray(v) ? deepFlattenArr(v) : v)));

const deepArr = [1, 2, [3, 4], [5, [6, 7, [8, 9]]], 10];

console.log(deepFlattenArr(deepArr));

//过滤数组对象属性
const filterProp = (data, keys) =>
  data.map((el) =>
    keys.reduce((pr, key) => {
      pr[key] = el[key];
      return pr;
    }, {})
  );

let data = [
  { title: "jin", name: "Tom", age: 26, num: 001 },
  { title: "xian", name: "Kim", age: 88, num: 333 },
];

const keys = ["title", "num"];

console.log(filterProp(data, keys));
// [ { title: 'jin', num: 1 }, { title: 'xian', num: 333 } ]

const test = [1, 2, 3, 4];
console.log(test.slice(1));
console.log(test.splice(0, 1));
