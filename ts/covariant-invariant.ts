//主类型
interface A {
  name: string;
  age: number;
}

interface B {
  name: string;
  age: number;
  gender: string;
}

let aa: A = {
  name: "a",
  age: 1
};

let bb: B = {
  name: "b",
  age: 2,
  gender: "male"
};

a = b; //协变

//逆变
let fna = (a: A) => {};

let fnb = (b: B) => {};

// fna = fnb; //报错，如果这个是成立的，则属于双向协变，但是ts中是不允许的
fnb = fna; //逆变
