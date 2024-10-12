let a: symbol = Symbol(1);
let b: symbol = Symbol(1);

console.log(a === b); // false

const obj = {
  name: "John",
  [a]: "hello",
  [b]: "world"
};

//只有这个方法可以拿到symbol
Reflect.ownKeys(obj).forEach((key) => {
  console.log(key);
});

// Symbol() creates a unique symbol every time it is called.
// So, even if the description is the same, the symbols are not equal.
// This is useful for creating unique identifiers for objects or properties.

console.log(Symbol("1") === Symbol("1")); // true
