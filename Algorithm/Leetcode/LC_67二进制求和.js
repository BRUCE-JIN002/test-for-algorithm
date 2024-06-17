var addBinary = function (a, b) {
  let maxLength = Math.max(a.length, b.length) + 1;
  let aa = a.padStart(maxLength, "0");
  let bb = b.padStart(maxLength, "0");
  const res = new Array(maxLength).fill("0");
  let carry = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    if (aa[i] === "1" && aa[i] === bb[i]) {
      if (carry === 1) {
        res[i] = "1";
      } else {
        carry = 1;
        res[i] = "0";
      }
    } else if (aa[i] === "0" && aa[i] === bb[i]) {
      if (carry === 1) {
        res[i] = "1";
        carry = 0;
      } else {
        res[i] = "0";
      }
    } else {
      if (carry === 1) {
        res[i] = "0";
      } else {
        res[i] = "1";
        carry = 0;
      }
    }
  }
  return res[0] === "0" ? res.slice(1).join("") : res.join("");
};
