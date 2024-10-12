interface Visitor {
  referer: string;
}

interface Registered {
  email: string;
}

type User2 = Visitor | Registered;

const user: User2 = {
  referer: "www.google.com",
  email: "linbudu@qq.com"
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

type XORUser = XOR<Visitor, Registered>;

// 属性“email”的类型不兼容。
const user1: XORUser = {
  referer: "www.google.com"
};

user1.email; // undefined
// user1.email = "linbudu@qq.com"; // X

// 属性“email”的类型不兼容, 不能同时存在
const user2: XORUser = {
  //   referer: "www.google.com",
  email: "linbudu@qq.com"
};
