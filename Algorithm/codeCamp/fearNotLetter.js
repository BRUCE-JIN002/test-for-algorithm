function fearNotLetter(arr) {
  const cmpStr = "abcdefghijklmnopqrstuvwxyz";
  let first = cmpStr.indexOf(arr[0]);
  let last = cmpStr.indexOf(arr[arr.length - 1]);
  let cmpStr1 = cmpStr.slice(first, last + 1);
  const total = cmpStr1 + arr;
  let result = 0;
  for (let i = 0; i < total.length; i++) {
    result ^= total[i].charCodeAt();
  }
  return result === 0 ? undefined : String.fromCharCode(result);
}

console.log(fearNotLetter("abcdefhi"));
