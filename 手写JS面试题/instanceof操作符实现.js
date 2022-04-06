/**
 * 手写 instanceof 操作符实现:
 */

function myInstanceOf(left, right) {
    while (true) {
        if (left === null) {
            return false;
        }
        if (left.__proto__ === right.prototype) {
            return true;
        }
        left = left.__proto__;
    }
}

const arr = [];

console.log(myInstanceOf(arr, Array)); //true

console.log(myInstanceOf(arr, String)); //false