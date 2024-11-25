function objectFactory(constructor, ...args) {
  if (typeof constructor !== "function") {
    throw new Error("type error");
  }
  // 创建一个空对象，继承构造函数的原型对象
  const newObj = Object.create(constructor.prototype);

  // 执行构造函数，将属性和方法添加到新对象上
  const res = constructor.apply(newObj, args);

  // 如果构造函数执行后返回的是一个对象，则返回该对象；否则返回新创建的对象
  return res instanceof Object ? res : newObj;
}
