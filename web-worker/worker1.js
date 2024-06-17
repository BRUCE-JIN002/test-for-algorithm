self.onmessage = (msg) => {
  const { start, end } = msg;
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += 1;
  }
  console.log(sum);
  self.postMessage(sum);
};
