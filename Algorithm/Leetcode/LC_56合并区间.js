var merge = function (intervals) {
  const temp = [];
  for (const [start, end] of intervals) {
    for (let i = start; i <= end; i++) {
      temp[i] = i;
    }
  }
  const res = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== undefined) {
      let j = i;
      while (temp[j] !== undefined) {
        j++;
      }
      res.push([temp[i], temp[j - 1]]);
      i = j - 1;
    }
  }
  return res;
};

const res = merge([[1, 4][(4, 5)]]);

console.log(res);

JSON.stringify;
