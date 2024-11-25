const str = "{[()]}{[()]}";
const str2 = "}}";

const match = (str) => {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  for (let char of str) {
    if (char === "(" || char === "[" || char == "{") {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (top !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

const res = match(str);
console.log("str1", res);

const res2 = match(str2);
console.log("str1", res2);
