//数组解构

let res = ([a, b, c] = "abc");
console.log(b);

let [one, two, three] = new Set([1, 2, 3]);
console.log(one);
console.log(three);

let user = {};
[user.name, user.surname] = "John Smith".split(" ");
console.log(user);

let user1 = {
    name: "Jhon",
    age: 30,
};

for (let [key, value] of Object.entries(user1)) {
    console.log(key, value);
}

let user2 = new Map();
user2.set("name", "Jack");
user2.set("age", 28);

for (let [key, value] of user2) {
    console.log(key, value);
}

//交换值的技巧
let guest = "Jane";
let admin = "Peter";

[guest, admin] = [admin, guest];

console.log(guest, admin);

//扩展操作符(...)
let [name1, name2, ...rest] = ["Juliy", "Caser", "Console", "One of name"];
console.log(name1, name2);
console.log(rest);

//如果我们想要一个“默认”值给未赋值的变量，我们可以使用 = 来提供:
let [name3 = "Guset", surname3 = "Anonymous"] = ["Juliy"];

console.log(name3);
console.log(surname3);

//默认值可以是更加复杂的表达式甚至可以是函数调用，
//这些表达式或函数只会在这个变量未被赋值的时候才会被计算。
// 只会提示输入姓氏
let [name4 = prompt("name?"), surname4 = prompt("surname?")] = ["Julius"];

console.log(name4); // Julius（来自数组）
alert(surname4); // 你输入的值