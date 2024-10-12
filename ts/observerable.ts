const list: Set<Function> = new Set();

const autoRun = (callback: Function) => {
  if (!list.has(callback)) {
    list.add(callback);
  }
};

const observerable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      console.log(`Setting to ${value}`);
      list.forEach((callback) => {
        callback();
      });
      return result;
    }
  });
};

const user = observerable({
  name: "John",
  age: 30,
  email: "john@example.com"
});

autoRun(() => {
  console.log(`User's name is changed to ${user.name}`);
});

//监听到变化会触发订阅的事件
user.name = "Jane";
