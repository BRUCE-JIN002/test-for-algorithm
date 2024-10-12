const obj = {
  name: "张三",
  age: 18,
  gender: "男"
};

Object.defineProperties(obj, {
  job: {
    value: "前端工程师",
    enumerable: false
  },
  salary: {
    value: 10000,
    enumerable: true
  }
});

//1. Object.keys()
console.log(Object.keys(obj)); // ["name", "age", "gender", "salary"]

//2. for...in
for (let key in obj) {
  console.log(key); // "name", "age", "gender", "salary"ß
}

//3. JSON.stringify()
console.log(JSON.stringify(obj)); //{"name":"张三","age":18,"gender":"男","salary":10000}
