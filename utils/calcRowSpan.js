const objArr = [
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 3,
  },
  {
    a: 2,
    b: 2,
  },
  {
    a: 2,
    b: 3,
  },
  {
    a: 2,
    b: 2,
  },
  {
    a: 2,
    b: 2,
  },
  {
    a: 2,
    b: 8,
  },
  {
    a: 0,
    b: 3,
  },
  {
    a: 5,
    b: 4,
  },
  {
    a: 5,
    b: 5,
  },
  {
    a: 5,
    b: 1,
  },
  {
    a: 5,
    b: 6,
  },
];

//统计对象数组中某属性不同值的数量
const sameValueCount = (objArr, field) => {
  const sortedArr = objArr.sort((a, b) => a[field] - b[field]);
  const res = {};

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let step = 1;
    while (
      sortedArr[i + step] !== undefined &&
      sortedArr[i + step][field] !== undefined &&
      sortedArr[i][field] === sortedArr[i + step][field]
    ) {
      step++;
    }
    const key = sortedArr[i][field].toString();
    res[key] = step;
    i += step - 1;
  }

  return res;
};

console.log(sameValueCount(objArr, "a"));
console.log(sameValueCount(objArr, "b"));

const calcRowSpan = (objArr, field) => {
  const sortedArr = objArr.sort((a, b) => a[field] - b[field]);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let step = 1;
    while (
      sortedArr[i + step] !== undefined &&
      sortedArr[i + step][field] !== undefined &&
      sortedArr[i][field] === sortedArr[i + step][field]
    ) {
      step++;
    }
    for (let j = i; j < i + step; j++) {
      sortedArr[j].count = j === i ? (step === 1 ? 0 : step) : 0;
    }
    i += step - 1;
  }

  return sortedArr;
};

console.log(calcRowSpan(objArr, "a"));
