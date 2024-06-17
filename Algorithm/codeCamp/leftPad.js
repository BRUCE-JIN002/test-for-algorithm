const leftPad = (str, length, ch) => {
  let len = length - str.length;
  let total = "";
  while (true) {
    if (len & 1) {
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch;
    len = len >> 1;
  }
};

console.log(leftPad("hello", 20, "0"));
