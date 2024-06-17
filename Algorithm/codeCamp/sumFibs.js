function sumFibs(num) {
  let sum = 0;
  let previous = 0;
  let current = 1;

  while (current <= num) {
    if (current & 1) {
      sum += current;
    }

    const next = previous + current;
    previous = current;
    current = next;
  }

  return sum;
}

// 测试函数
const res = sumFibs(10);
console.log("result:", res);
