const myAtoi = (s) => {
  const reg = /^[+-]?\d+/;
  const target = s.trim().match(reg);
  let result = parseInt(target, 10);
  if (isNaN(result)) {
    return 0;
  }
  if (result < -2147483648) {
    return -2147483648;
  }
  if (result > 2147483647) {
    return 2147483647;
  }
  return result;
};
