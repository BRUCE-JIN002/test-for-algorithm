function calculateFibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
  }
}

onmessage = function (event) {
  var n = event.data;
  var result = calculateFibonacci(n);
  console.log(result);
  postMessage(result);
};
