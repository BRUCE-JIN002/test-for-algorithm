const person = { name: "jin" };

const proxy = new Proxy(person, {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return undefined;
      //   throw new ReferenceError('Property "' + property + '" does not exist.');
    }
  }
});

console.log(proxy.name); // "jin"
console.log(proxy.age); // ReferenceError: Property "age" does not exist.
