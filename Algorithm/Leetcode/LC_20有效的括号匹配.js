var isValid = function (s) {
  let stack = [];
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele in obj) {
      stack.push(s[i]);
    } else {
      top = stack.pop();
      if (ele !== obj[top]) {
        return false;
      }
    }
  }
  return !stack.length;
};
