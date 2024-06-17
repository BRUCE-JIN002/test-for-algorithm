function addTogether() {
  if (arguments.length === 1 && typeof arguments[0] === "number") {
    return function (n) {
      return addTogether(n);
    };
  }
  if (
    arguments.length === 2 &&
    typeof arguments[0] === "number" &&
    typeof arguments[1] === "number"
  ) {
    return arguments[0] + arguments[1];
  }
  return undefined;
}

const sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3)); // 输出：5
