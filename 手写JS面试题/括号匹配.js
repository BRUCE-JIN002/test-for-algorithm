const str = "{[()]}{[()]}";
const str2 = "}}";

const match = (str) => {
  const stack = [];
  const map = {
    "(": -1,
    "[": -2,
    "{": -3,
    ")": 1,
    "]": 2,
    "}": 3
  };
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    } else {
      const temp = stack[stack.length - 1];
      if (map[temp] + map[c] === 0) {
        stack.pop();
      } else {
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
