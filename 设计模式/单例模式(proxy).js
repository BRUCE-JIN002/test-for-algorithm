class MyTestClass {
  constructor() {}
}

function singleton(className) {
  let ins = null;
  const proxy = new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        ins = Reflect.construct(target, args);
      }
      return ins;
    }
  });
  proxy.prototype.construct = proxy;
  return proxy;
}

const Mysingleton = singleton(MyTestClass);

const test1 = new Mysingleton(MyTestClass);
const test2 = new Mysingleton(MyTestClass);

console.log(test1 === test2);
