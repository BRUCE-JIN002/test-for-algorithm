const person = {
  name: "John",
  age: 30,
  job: "developer"
};

const handler = {
  //拦截值的获取, receiver 表示原始对象, 用来保证上下文的正确
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  //拦截值的设置
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
  //拦截in操作符
  has(target, prop) {
    return Reflect.has(target, prop);
  },
  //拦截for in
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },
  //拦截函数的调用
  apply(target, thisArg, args) {
    console.log(`Applying with arguments: ${args}`);
    return Reflect.apply(target, thisArg, args);
  }
};

//proxy支持函数，数组，对象， set， map 等类型的代理
const proxy = new Proxy(person, handler);
