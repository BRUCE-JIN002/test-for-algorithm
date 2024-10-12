//infer就是推导泛型参数
//infer只能出现在 extends 子语句中

//获取promise的返回值类型
interface User {
  name: string;
  age: number;
}

type UserPromise = Promise<User>;

type GetPromiseReturnType<T> = T extends Promise<infer U>
  ? GetPromiseReturnType<U>
  : T;

type T = GetPromiseReturnType<UserPromise>;

//infer 协变
//产生协变会返回第一个联合类型
const foo = {
  name: "foo",
  age: 18
};

type Bar<T> = T extends { name: infer N; age: infer A } ? [N, A] : T;
//协变
type Bar1<T> = T extends { name: infer U; age: infer U } ? U : T;

type T1 = Bar<typeof foo>;
//协变
type T2 = Bar1<typeof foo>;

//infer 逆变，一般出现在函数的参数上，返回交叉类型
type Bar2<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;

type T3 = Bar2<{ a: (x: string) => void; b: (x: number) => void }>;
type T4 = Bar2<{ a: (x: string) => void; b: (x: string) => void }>;

//提取头部元素

type Arr = ["a", "b", "c"];

type First<T extends any[]> = T extends [infer F, ...any[]] ? F : [];

type T5 = First<Arr>;

//提取尾部元素
type Last<T extends any[]> = T extends [...any[], infer L] ? L : [];

type T6 = Last<Arr>;

//提取除了最后一个元素的所有元素
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : [];

type T7 = Pop<Arr>;

//提取中间元素
type Middle<T extends any[]> = T extends [any, ...infer Rest, any] ? Rest : [];

type T8 = Middle<Arr>;

//递归取逆序
type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T;

type T9 = Reverse<Arr>;
