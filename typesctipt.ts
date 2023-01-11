let timer: number = setTimeout(
  (val1: number, val2: number) => {
    console.log(`${val1} + ${val2} = ${val1 + val2}`);
  },
  1000,
  2,
  3
);

console.log(timer);

console.log(`hello
good Night bye bye!`);

let str = "return " + "`hello  ${name}`";

let func = new Function("name", str);
console.log(func("Jack"));

let str1 = "(name) => `Hello ${name}`";
let func1 = eval.call(null, str1);
console.log(func1("Tom"));

let sum = new Function("a", "b", "return a + b");
console.log(sum(1, 2));
