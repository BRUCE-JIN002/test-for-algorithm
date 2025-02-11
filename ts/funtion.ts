//函数类型
function add(a: number = 10, b: number = 20): number {
  return a + b;
}

//函数表达式
interface Obj {
  user: number[];
  add: (this: Obj, num: number) => number;
}

const obj1: Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num);
    return this.user.length;
  }
};

//函数重载
let user: number[] = [1, 2, 3];
function findNum(add: number[]): number[];
function findNum(id: number): number[];
function findNum(): number[];
function findNum(ids?: number | number[]): number[] {
  if (ids && typeof ids === "number") {
    return user.filter((item) => item === ids);
  } else if (ids && Array.isArray(ids)) {
    user.push(...ids);
    return user;
  } else {
    return user;
  }
}
