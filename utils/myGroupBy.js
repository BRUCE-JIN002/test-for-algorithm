const people = [
  {
    name: "Alice",
    age: 20,
    sex: "female",
  },
  {
    name: "Bob",
    age: 25,
    sex: "male",
  },
  {
    name: "Charlie",
    age: 30,
    sex: "male",
  },
  {
    name: "Diana",
    age: 25,
    sex: "female",
  },
  {
    name: "Frank",
    age: 35,
    sex: "male",
  },
  {
    name: "Grace",
    age: 30,
    sex: "female",
  },
  {
    name: "Tom",
    age: 30,
    sex: "female",
  },
];

const myGroupBy = (arr, generateKey) => {
  //参数归一化
  if (typeof generateKey === "string") {
    const propName = generateKey;
    generateKey = (item) => item[propName];
  }
  const result = {};
  for (let item of arr) {
    const key = generateKey(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
};

const test1 = myGroupBy(people, "age");
const test2 = myGroupBy(people, (item) => item.sex);
const test3 = myGroupBy(people, (item) => `${item.age}-${item.sex}`);
const test4 = myGroupBy(people, (item) => (item.age & 1 ? "奇" : "偶"));
console.log(test1, test2, test3, test4);
