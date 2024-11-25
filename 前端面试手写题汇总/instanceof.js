function myInstanceof(target, origin) {
  if (typeof target !== "object" || target === null) return false;
  if (typeof origin !== "function") {
    throw new TypeError("origin must be a function");
  }
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) {
      return true;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }
  return false;
}

let obj = {};
let foo = new Function();
let arr = [1, 2];

console.log(myInstanceof(obj, Object)); // true
console.log(myInstanceof(foo, Function)); // true
console.log(myInstanceof(arr, Array)); // true
